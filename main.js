const express=require("express");
const mongomodel=require("./mongo.js");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.render("ap.ejs");
});
app.post("/", async (req,res)=>{
const data=new mongomodel(req.body);
      await data.save();
      console.log(data)
      res.send(data);
});

app.listen(3001,()=>{
    console.log("running")
});
