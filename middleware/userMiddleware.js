const {checkValidId} = require('../helpers/usersHelpers');
///Param :id

const idParam = (req, res, next ,id) =>{
    const ID = Number(id);
    if(checkValidId(ID)){
        req.id = ID;
        next();
    }else{
        res.json({
            success: false,
            mess: 'Invalid Id'
        });
    };
};




module.exports ={idParam};