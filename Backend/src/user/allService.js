
var all = require('./allModel');
module.exports.getAll = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        all.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }