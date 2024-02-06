const CrudBookModels=require('../Models/Crud.Model')
//class controllers
class CrudBookController {
    static async MainRoute(req, res) {
        res.send("Crud Book Create");
    }
    static async getAllCrudBook(req, res) {
        try {
            const crudBook = await CrudBookModels.find()
            res.json(crudBook)
        }catch(err) {
            res.status(500).json({message:err.message})
        }
    }



}
module.exports = CrudBookController;