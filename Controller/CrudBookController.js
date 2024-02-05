const CrudBookModel = require("../models/CrudBookModel");

//class controllers
class CrudBookController {
    static async MainRoute(req, res) {
        res.send("Crud Book Create");
    }
}
module.exports = CrudBookController;