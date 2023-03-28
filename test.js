const {db} = require('./config/dbconnect');
//
// async function queryDb() {
//      try {
//           const result = await new Promise((resolve, reject) => {
//                db.query('SELECT * FROM "user"', (err, res) => {
//                     if (err) {
//                          reject(err);
//                     } else {
//                          resolve(res.rows);
//                     }
//                });
//           });
//           console.log('Result:', result);
//      } catch (error) {
//           console.error(error);
//      }
// }
//
// queryDb();


// const result = new Promise((resolve, reject)=>{
//      const bool = true;
//      if(bool){
//           resolve('Khanh');
//      }else{
//           reject();
//      }
// });
//
// result.then((data)=>{
//      console.log(data);
// })
//
// console.log(result);

// function getData(callback) {
//      setTimeout(() => {
//           const data = 'data from server';
//           callback(data);
//      }, 3000);
// }
//
// function logData(data) {
//      console.log(`Data: ${data}`);
// }
//
//
// getData(logData);
// console.log(1);
const doo = async () =>{
let  query =  `Update "user" SET username = 'macbaokhanh' Where id =1 Returning *`;
const result = await db.query(query);
console.log(result);}
doo();