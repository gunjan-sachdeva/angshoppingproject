app.get("/registeredUsers", async (req, res) => {
    try {
      const usersRef = db.collection("registeredUsers");
      const response = await usersRef.get();
  
      let responseArr = [];
      response.forEach((doc) => {
        responseArr.push(doc.data());
      });
      
      // Assign the local array value to the global array
      globalResponseArr = responseArr;
      
      res.send(responseArr);
      console.log("=========================================")
      console.log("=========================================")
      console.log("=========================================")
      console.log("res; " + responseArr[0].name);
  
      myName = responseArr[0].name;
      myEmail = responseArr[0].email;
      myAddress = responseArr[0].address;
      console.log("=========================================")
      console.log("=========================================")
      console.log("=========================================")
    } catch (error) {
      res.send(error);
    }
  });