const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
  name:{type:String,required:true},
  age:{type:Number}
})
const User=mongoose.model('User',userSchema)
async function addUser(){
  await mongoose.connect('mongodb://127.0.0.1:27017/myDatabase');
  const newUser =new User({name:'bhargavi',age:25})
  await newUser.save();
  console.log('user added to Mongodb')
}
addUser();