import './App.css'
import React from 'react'
import Hello from './pages/Hello/Hello'
import { response } from "express"; //
/* const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const app=express();const urlencodeParser=bodyParser.urlencoded({extended:false});
const sql=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'u1n9e1',
  port:3306
  
});
sql.query("use nodejs");
//Templates
app.get("/inserir",function(req,res){res.render("inserir");});
app.post("/controllerForm",urlencodeParser,function(req,res){
    sql.query("insert into user values (?,?,?)",[req.body.id,req.body.name,req.body.age]);
    res.render('controllerForm',{name:req.body.name});
});

 */
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'u1n9e1',
  database : 'nodejs'
});


export default (props) =>(
  
  
<div>
    <Hello></Hello>        
</div>);

