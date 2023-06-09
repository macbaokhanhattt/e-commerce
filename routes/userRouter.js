const express = require('express');
const {idParam} = require('../middleware/userMiddleware');
const {getAllUsers, register, getUserById, updateUser, deleteUser} = require('../controllers/userController');

const userRoutes = express.Router();
///param
userRoutes.param('id',idParam);


///Method
userRoutes.get('/users',getAllUsers);
userRoutes.get('/users/:id',getUserById);
userRoutes.post('/users/register',register);
userRoutes.put('/users/:id',updateUser);
userRoutes.delete('/users/:id',deleteUser);

module.exports ={userRoutes}