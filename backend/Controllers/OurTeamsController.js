const Team = require("../Models/teams");
class OurTeamController{
    getTeam= async (req,res)=>{
        const teamData =  await Team.findAll();
        res.json({status:true,message:'Success',data:teamData});
    }
}

module.exports = OurTeamController;