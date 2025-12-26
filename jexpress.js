// import express from "express";
const express = require ("express");
const app = express();

app.set("view engine","ejs");
// app.use(express.static(`./public`))

app.use(function(req,res,next){
    console.log("Hello from middle");
    next();
});
app.get("/",function(req,res){
    res.render("index");
});
app.get("/profile/:username",function(req,res){
    res.render(`Hello from ${req.params.username}`);
});
app.listen(3000);