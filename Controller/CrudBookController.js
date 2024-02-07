const Crud=require('../Models/Crud.Model');
const User=require('../Models/Test.Model');

exports.createnewCrudBook=async (req,res)=>{
    try{
        const crud=new Crud({
            title:req.body.title,
            description:req.body.description,
            cover:req.body.cover
        });
        const saveCrud=await crud.save();
        res.status(200).json(saveCrud);
    }catch(err){
        res.status(500).json({err:err.message});
    }
}
exports.getAllCrud=async (req,res)=>{
    try {
        const crud=await Crud.find();
        res.status(200).json(crud);
    }catch (err){
        res.status(500).json({err:err.message});
    }
}
exports.getOneCrudByID = async (req, res) => {
    try {

        const data = await Crud.findById(req.params.id);
        res.status(200).json(data);
        res.json()
    } catch (err) {
        res.status(500).json({err: err.message})
    }

}
































//class controllers
// class CrudBookController {
//     static async MainRoute(req, res) {
//         res.send("Crud Book Create");
//     }
//     static async getAllCrudBook(req, res) {
//         try {
//             const crudBook = await Crud.find();
//             res.json(crudBook)
//         }catch(err) {
//             res.status(500).json({message:err.message})
//         }
//     }
//     static async createNewCrudBook(req, res) {
//         const data=new Crud({
//             title:req.body.title,
//             description:req.body.description,
//             cover:req.body.cover
//         })
//         try{
//             // const saveNewCurdBook=await data.save();
//             const saveNewCurdBook=await data.save();
//             res.status(200).json(saveNewCurdBook)
//         }catch(err) {
//             res.status(400).json({message:err.message})
//         }
//     }
//
//     static async User(req, res){
//         const er=new User({
//             name:req.body.name,
//             age:req.body.age
//         })
//         try{
//             const saveUser = await er.save();
//             res.status(200).json(saveUser)
//         }catch (err){
//             res.status(400).json({message:err.message})
//         }
//     }
//
//
//
// }
// module.exports = CrudBookController;