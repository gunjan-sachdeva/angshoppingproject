const { exec } = require('child_process');


function restoreDatabase(dbName) {
  
  const command = `mongorestore --db ${dbName} dump/${dbName}`;

 
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing mongorestore: ${error}`);
    } else {
      console.log(`Database ${dbName} restored successfully.`);
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

// Usage
const databaseName = 'angularCrud';
restoreDatabase(databaseName);
