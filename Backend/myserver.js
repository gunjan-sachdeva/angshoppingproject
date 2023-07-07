/* Importing Dependencies */
const express = require("express");
const routes = require('./routes/routes')
const path = require("path");
const uuid = require('uuid');
const app = express();
const cors = require("cors");
require('dotenv').config();


/* Using CORS */
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

/* MongoDB Connection */
const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://0.0.0.0:27017/angularCrud'
,{useNewUrlParser : true, useUnifiedTopology : true},
function checkDB(error){
    if(error){
        console.log('error!');
    }
    else{
        console.log("DB Connected !!!")
    }
}
);

app.use(express.json());
app.use(routes);

/* Nodemailer Dependencies */
const admin = require("firebase-admin");
const credentials = require("./key.json");
const Trello = require('trello');
const nodemailer = require('nodemailer');



const trello = new Trello('f837147e9c40afa3cee99b25cc4a8ecf', 'ATTAcaf0c85a5c071d3e082e06e8f31c89b7e1a8eddef4fe60b1f9064e3a530ca78aBD2EEC89');

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});


app.use(express.urlencoded({ extended: true }));

const db = admin.firestore();
let counter = 100;

function generateSequentialId() {
  counter--;
  return counter;
}
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"));
  });
  app.get("/log", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"));
  });

let orderNumber = generateRandomOrderNumber(); // Initialize the order number
let trackingId = generateRandomOrderNumber();
let transactionId = generateTransactionID();
const currentDate = new Date();

const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);

const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);

// --------------------
app.get('/start', async (req, res) => {
  try {
    await createTrelloCard();
    res.send('Node application started successfully!');
  } catch (error) {
    console.error('Failed to start Node application:', error);
    res.status(500).send('Failed to start Node application.');
  }
});

const password = process.env.password;
const email = process.env.email;

async function createTrelloCard() {
  try {
    // Create a Trello card
    const cardDetails = {
      name: `Order no. ${orderNumber} Placed`,
      desc: `The following order ${orderNumber} is placed via VESTIRIUM with Tracking ID : ${trackingId} at time: ${formattedTime} on ${formattedDate}.`,
      idList: '646caba49d25a4ef1bf82c71',
    };

    const createdCard = await trello.addCard(cardDetails.name, cardDetails.desc, cardDetails.idList);
    console.log('Trello card created:', createdCard);

    // Send an email
    const transporter = nodemailer.createTransport({
      service: 'Ethereal',
      auth: {
        user: email,
        pass: password,
      },
    });

    const mailOptions = {
      from: 'sharmashubh4488@gmail.com',
      to: email,
      subject: `Order no ${orderNumber} is placed`,
      html: `<!DOCTYPE html>
      <html>
      
      <head>
          <title>Order Confirmation</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f1f1f1;
                  padding: 20px;
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 40px;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              h1 {
                  font-size: 28px;
                  margin-bottom: 20px;
                  text-align: center;
                  color: #333333;
              }
      
              p {
                  font-size: 16px;
                  line-height: 24px;
                  margin-bottom: 10px;
                  color: #666666;
              }
      
              table {
                  margin-top: 10px;
                  margin-bottom: 20px;
                  width: 100%;
                  border-collapse: collapse;
              }
      
              th,
              td {
                  padding: 8px;
                  text-align: left;
                  border-bottom: 1px solid #ddd;
              }
      
              th {
                  background-color: #f2f2f2;
              }
      
              b {
                  font-weight: bold;
              }
      
              .logo {
                  text-align: center;
                  margin-bottom: 20px;
              }
          </style>
      </head>
      
      <body>
          <div class="container">
              <div class="logo">
                  <img src="https://img.freepik.com/premium-vector/fast-shipping-logo_10250-3101.jpg?w=2000" alt="VESTIRIUM Logo" width="200">
              </div>
              <h1>Order Confirmation</h1>
              <p>Dear <b>Customer</b>,</p>
              <p>Thank you for shopping with VESTIRIUM, your order has been successfully placed at <b>${formattedTime}</b> on
                  <b>${formattedDate}</b>.</p>
              <table>
                  <tr>
                      <th>Order Number</th>
                      <td>${orderNumber}</td>
                  </tr>
                  <tr>
                      <th>Tracking ID</th>
                      <td>${trackingId}</td>
                  </tr>
                  <tr>
                      <th>Transaction Number</th>
                      <td>${transactionId}</td>
                  </tr>
              </table>
              <p>We will notify you once your order has been shipped.</p>
              <p>Thank you for choosing <b>VESTIRIUM</b>. If you have any questions, please feel free to contact our customer
                  support.</p>
              <p>Best regards,</p>
              <p style="font-weight: bold">VESTIRIUM Clothing Store</p>
          </div>
      </body>
      
      </html>
      
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    // Update the Trello card with email status
    const updatedCard = await trello.updateCard(createdCard.id, {
      desc: `${createdCard.desc}\n\nEmail Status: Sent`,
    });
    console.log('Trello card updated:', updatedCard);

    // Increment the order number
    orderNumber++;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

// --------------------
function generateRandomOrderNumber() {
  let orderNumber = '';
  for (let i = 0; i < 10; i++) {
    orderNumber += Math.floor(Math.random() * 10); // Generate a random digit (0-9) and append it to the orderNumber
  }
  return orderNumber;
}
function generateTransactionID() {
    let orderNumber = '';
    for (let i = 0; i < 10; i++) {
      orderNumber += Math.floor(Math.random() * 10); // Generate a random digit (0-9) and append it to the orderNumber
    }
    return orderNumber;
  }




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
