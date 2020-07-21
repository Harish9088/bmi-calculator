const express = require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/calculator.html");

});
app.post("/",(req,res)=>{
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send("the final result is" +result);
});

app.get("/bmicalculator",(req,res)=>{
res.sendFile(__dirname+"/BMIcalculator.html");
});
app.post("/bmicalculator",(req,res)=>{
  var h=parseFloat(req.body.height);
  var w=parseFloat(req.body.weight);
  var results=((w/(h*h))*703);
  res.send("the final result is" +results);
});
app.listen(3000,()=>{
  console.log("running server")
});
