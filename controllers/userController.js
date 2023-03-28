const {db} = require('../config/dbconnect');
const {query} = require("express");
const {values} = require("pg/lib/native/query");


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
};



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


//PUT - /users/:id
const updateUser = (req, res) =>{
    const {username, password , first_name, last_name, telephone, address} = req.body;
    if(Object.keys(req.body).length !== 0){
        let Set ='';
        let count =0;
        if(username !== undefined){
            if(count===0){
                count++;
            }else{
                Set +=',';
            }
            Set += `username = '${username}'`;
        }
        if(password !==undefined){
            if(count===0){
                count++;
            }else{
                Set +=',';
            }
            Set += `password = '${password}'`;
        }
        if(first_name !== undefined){
            if(count===0){
                count++;
            }else{
                Set +=',';
            }
            Set += `first_name = '${first_name}'`;
        }
        if(last_name !==undefined){
            if(count===0){
                count++;
            }else{
                Set +=',';
            }
            Set += `last_name = '${last_name}'`;
        }
        if(telephone !==undefined){
            if(count===0){
                count++;
            }else{
                Set +=',';
            }
            Set += `telephone = '${telephone}'`;
        }
        if(address !==undefined){
            if(count===0){
                count++;
            }else{
                Set +=',';
            }
            Set += `address = '${address}'`;
        }

        let query = `Update "user" Set ${Set} Where id =${req.id} Returning *`;
        console.log(query);
        db.query(query,(err, result)=>{
            if(!err){
                res.send(result.rows);
            }else{
                return res.json({
                    success: false,
                    mess: 'Fail To Update!!!'
                });
            }
        });

    }else{
        return res.status(400).json({
            success:false,
            mess: 'Missing Input'
        });
    };
};

//DELETE - /users/:id
const deleteUser = (req,res) =>{
    let query = `Delete From "user" Where id = ${req.id} Returning *`;
    db.query(query,(err, result)=>{
        if(!err){
            res.send(result.rows);
        }else{
            return res.json({
                success: false,
                mess: 'Fail To Delete!!!'
            });
        }
    });

}

module.exports ={
    deleteUser,
    updateUser,
    getAllUsers,
    getUserById,
    register
}