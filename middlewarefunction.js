const express=require('express')
const app=express()
/*const logger=(req,res,next)=>{
    console.log(`request method:${req.method},request url:${req.url},time:${new Date()}`)
    next()
}
app.use(logger);
app.get('/',(req,res)=>{
    res.send('welcome to express app')
})
app.get('/about',(req,res)=>{
    res.send('this is about page')
})
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})*/
app.get('/users/:userId',(req,res)=>{
    const userId =req.params.userId;
    res.send(`userId is:${userId}`)
})
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})
