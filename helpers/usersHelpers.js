const {db} = require('../config/dbconnect');

const checkValidId = (id) => {
    let query = `Select id from "user" Where id = $1`;
    let values = [id];
    db.query(query, values, (err, result)=>{
        if(result.rows.length >0){
            return true;
        }else{
            return false;
        };
    });
};

module.exports = {
    checkValidId
};
