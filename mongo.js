const mongoose =require("mongoose");
const bcrypt=require("bcrypt");
const { channel } = require("diagnostics_channel");
mongoose.connect("mongodb://127.0.0.1:27017/asgh");
 const scma=mongoose.Schema;
  const schema=new scma({
    name:String,
    age:Number,
    password:String

  });

  schema.pre("save", async function(next){
       
this.password=await bcrypt.hash(this.password,10);
console.log(this.password);
const chechpassword="dfhgfg";
bcrypt.compare(chechpassword,this.password,(er,hg)=>{
    if(er){
        confirm.log(er)
    }
    else{
        console.log(hg)
    }
})

    
    
  
 
next();
  });
  const mongomodel=mongoose.model("ffgg",schema);
  module.exports=mongomodel;