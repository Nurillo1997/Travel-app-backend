console.log("Web Serverni boshlash");
const express = require("express");
const app = express();

// MongoDB chaqirish
//server moduleni objecti bolgan db ni export qildik
const db = require("./server").db();

const mongodb = require("mongodb");
// let user;

//1: kirish codelari
//Express middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2:Session code

//3:View code
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing code

module.exports = app;