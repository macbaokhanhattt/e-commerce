const {checkValidId} = require('../helpers/usersHelpers');
///Param :id

const idParam = async (req, res, next ,id) => {
    const ID = Number(id);
    const bool = await checkValidId(ID);

    if( bool=== true){
        req.id = ID;
        next();
    }else{
        res.json({
            success: false,
            mess: 'Invalid Id'
        });
    };
}



module.exports ={idParam};