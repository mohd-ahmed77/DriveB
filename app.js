const express=require('express');
const app=express();
const port=3000;
const path=require('path');


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{   
    res.render('index');
});



app.post('/formdata',(req,res)=>{   
    console.log(req.body);
   console.log('form data');     
    res.send('Form data submitted successfully');
    
   
    

});




app.listen(port,()=>{   console.log(`Server is running on port ${port}`);}  );

