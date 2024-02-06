const Crud=require('../Models/Crud.Model')
//class controllers
class CrudBookController {
    static async MainRoute(req, res) {
        res.send("Crud Book Create");
    }
    static async getAllCrudBook(req, res) {
        try {
            const crudBook = await Crud.find();
            res.json(crudBook)
        }catch(err) {
            res.status(500).json({message:err.message})
        }
    }
    static async createNewCrudBook(req, res) {
        const data=new Crud({
            title:req.body.title,
            description:req.body.description,
            cover:req.body.cover
        })
        try{
            // const saveNewCurdBook=await data.save();
            const saveNewCurdBook=await data.save();
            res.status(200).json(saveNewCurdBook)
        }catch(err) {
            res.status(400).json({message:err.message})
        }
    }




}
module.exports = CrudBookController;