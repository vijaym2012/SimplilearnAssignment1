//add dependencies
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')

//define the express operation - to unlock the angular and express backend Port Number
const app=express();
const port=3000;


//defining the cors -cross origin by receiving the data in json format
app.use(cors());
app.use(bodyParser.json())

//establish the connection with the database
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Shahi@3033',
    database:'dbas1'
});

//conditional verification whether db is connected or not
db.connect(err=>{
    if(err){
        console.error('connection is not established with the database',err);
    }
    else{
        console.log('connection established with the database')
    }
});

//Confirmation for the establishment of the server port of express.json
app.listen(port,()=>{console.log('server established on port number 3000')});


// ------ Client ------ //

//to get all the clients
app.get('/getClient',(req,res)=>{
    const sql='select * from client';
    db.query(sql,(err,result)=>{
        if(err){
        console.error('Error in fetching the client',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json(result);
    }
});
});

//to get a client by id
app.get('/getClient/:id',(req,res)=>{
    const id=req.params.id;
    const sql='select * from client where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err){
        console.error('Error in fetching the client',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json(result);
    }
});
});   

//to insert client into db
app.post('/addClient',(req,res)=>{
    const {id,name,email,address,pswd,rpswd}=req.body;
    const sql='insert into client values(?,?,?,?,?,?)';
    db.query(sql,[id,name,email,address,pswd,rpswd],(err,result)=>{
        if(err){
            console.error('Error in adding the client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Client added successfully'});
        }
});
});   
//updation of Client
app.put('/updateClient',(req,res)=>{
    const {id,name,email,address,pswd,rpswd}=req.body;
    const sql='update client set name=?,email=?,address=?,pswd=?,rpswd=? where id=?';
    db.query(sql,[name,email,address,pswd,rpswd,id],(err,result)=>{
        if(err){
            console.error('Error in updating the Client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Client updated successfully'});
        }
});
});

//deletion of Client
app.delete('/deleteClient/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from client where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err){
        console.error('Error in deleting the client',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json({message:'Client deleted successfully'});
    }   
});
});


// ------ Meeting ------ //

//to get all the meeting
app.get('/getMeet',(req,res)=>{
    const sql='select * from meet';
    db.query(sql,(err,result)=>{
        if(err){
        console.error('Error in fetching the meeting data',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json(result);
    }
});
});

//to get a meeting by id
app.get('/getMeet/:id',(req,res)=>{
    const id=req.params.id;
    const sql='select * from meet where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err){
        console.error('Error in fetching the meet',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json(result);
    }
});
});   

//to insert meeting into db
app.post('/addMeet',(req,res)=>{
    const {id,mtopic,nop,mdate,mtime}=req.body;
    const sql='insert into meet values(?,?,?,?,?)';
    db.query(sql,[id,mtopic,nop,mdate,mtime],(err,result)=>{
        if(err){
            console.error('Error in adding the client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Meeting added successfully'});
        }
});
});  

//updation of the meeting
app.put('/updateMeet',(req,res)=>{
    const {id,mtopic,nop,mdate,mtime}=req.body;
    const sql='update meet set mtopic=?,nop=?,mdate=?,mtime=? where id=?';
    db.query(sql,[mtopic,nop,mdate,mtime,id],(err,result)=>{
        if(err){
            console.error('Error in updating the meeting',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Meeting updated successfully'});
        }
});
});

//deletion of meeting
app.delete('/deleteMeet/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from meet where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err){
        console.error('Error in deleting the meeting',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json({message:'Meeting deleted successfully'});
    }   
});
});