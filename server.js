const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {userRoutes} = require('./routes/userRouter')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8888;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

///main///
app.use('/',userRoutes);








///listen port///
app.listen(port, () => {
    console.log('Server is running on the PORT:'+port);
});