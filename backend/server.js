const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routers/userroutes');
const app = express();
require('dotenv').config();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/uploads', express.static('uploads'));
app.use('/api/users', userRoutes);



mongoose.connect(process.env.MONGO).then(() => { app.listen(process.env.PORT, () => console.log('Server running on port 3000')); })

