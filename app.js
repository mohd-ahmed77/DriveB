const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const User=require('./Models/User.js');
const connection=require('./config/db.js');
const userModel = require('./Models/User.js');
 // Connect to MongoDB
const userRouter=require('./Routes/user.routes.js');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static("Public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get('/',(req,res)=>{   
//     // res.render('index');
// });
connection(); 

app.use('/user',userRouter);







app.listen(port,()=>{   console.log(`Server is running on port ${port}`);}  );


const User=require('./Models/User.js');
const connection=require('./config/db.js');
const userModel = require('./Models/User.js');
 // Connect to MongoDB
const userRouter=require('./Routes/user.routes.js');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static("Public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get('/',(req,res)=>{   
//     // res.render('index');
// });
connection(); 

app.use('/user',userRouter);







app.listen(port,()=>{   console.log(`Server is running on port ${port}`);}  );

