/*const express=require('express')
const app=express()
function loggerMiddleware(req,res,next){
    console.log(`${new Date().toISOString()}-${req.method} ${req.url}`)
    next();
}
app.use(loggerMiddleware)
app.get('/',(req,res)=>{
    res.send('hello from express')
})
app.listen(3000,()=>{
    console.log('server running on localhost3000')
})*/
const express=require('express')
const app=express()
const axios=require('axios')
app.get('/get-joke',async(req,res)=>{
    try{
        const response=await axios.get('https://official-joke-api.appspot.com/random_joke'
)
    res.json(response.data)
    }catch(err){
        res.status(500).json({err:'somethimg went wrong'})
    }
})
app.listen(3000,()=>{
    console.log('server running on localhost3000')
})
