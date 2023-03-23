const {db} = require('../config/dbconnect');


// [GET] - /users
const getAllUsers = (req, res) =>{
    let query = `Select * from "user"`;
    db.query(query, (err,result)=>{
        if(!err){
            res.send(result.rows);
        }else{
            return res.json({
                success: false,
                mess: 'Fail To Querying!!!'
            });
        }
    });
};


//[GET] - /users/:id
const getUserById = (req, res) =>{
    let query = `Select * from "user" Where id = $1`;
    let values = [req.id];
    db.query(query,values, (err,result)=>{
        if(!err){
            res.send(result.rows);
        }else{
            return res.json({
                success: false,
                mess: 'Fail To Querying!!!'
            });
        }
    });
}


//[POST] - /users/register
const register = (req, res) =>{
    const {username,password, first_name, last_name, telephone, address } = req.body;
    if(!username || !password || !first_name || !last_name || !telephone || !address){
        return res.status(400).json({
           success:false,
           mess: 'Missing Input!!!'
        });
    }
    let query = `Insert Into "user"(username, password, first_name, last_name, telephone, address) Values ($1,$2,$3,$4,$5,$6) Returning *`;
    let values = [username,password,first_name, last_name, telephone, address];
    db.query(query,values, (err, result)=>{
        if(!err){
            return res.send(result.rows);
        }else{
            return res.json({
                success: false,
                mess: 'Fail To Insert: Maybe wrong type of key!!!'
            });
        }
    });
};



module.exports ={
    getAllUsers,
    getUserById,
    register
}