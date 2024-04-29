const fs = require('fs');
const express = require('express')
const route = '../style/media';
const app = express();
const port = 3000;
const files = fs.readdirSync(route);
const jsdom = require('jsdom');
app.get=('/route',(req,res){
  res.send(route);
})
app.get=('/files',(req,res){
  res.send(files);
}
console.log(files);
