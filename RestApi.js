const express=require('express')
const app=express()
app.use(express.json())
let users=[{id:1,name:'alice'},{id:2,name:'bhargavi'}]
app.get('/users',(req,res)=>{
    res.json(users);
})
app.post('/users',(req,res)=>{
    const newUser={id:users.length+1,name:req.body.name}
    users.push(newUser);
    res.status(201).json(newUser)
})
app.put('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const user=users.find(u=>u.id===userId)
    if(user){
        user.name=req.body.name;
        res.json(user)
    }else{
        res.status(404).json({message:'user not found'})
    }
})
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);  // Remove the user with matching ID
    res.json({ message: `User with ID ${userId} deleted` });
  });
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  