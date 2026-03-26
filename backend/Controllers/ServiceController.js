const Service = require("../Models/service")
class ServiceController{
   getData= async (req,res)=>{
    const services =  await Service.findAll();
    if(services.length > 0) {
        const ServiceArr = services.map((item)=>{
            return{
                id: item.id,
                name: item.name,
                img:  item.img
            }
        });
        res.json({status:'true',message:'success ', data:services});
    } else{
         res.json({status:'false',message:'Services not found ',});
    }
    }
}

module.exports = ServiceController;