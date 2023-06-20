var allService = require('./allService');
var getAll = async (req, res) =>
{
    var empolyee = await allService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}