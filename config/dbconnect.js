const {Pool} = require('pg');
require('jsonwebtoken');

const db = new Pool(

    {
   host:"localhost",
   user:"postgres",
   port:5432,
   password:"macbaokhanh2311",
   database:"ecomm"
});

module.exports = {
   db
}