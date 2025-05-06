const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.method==='GET' && req.url=== '/get-data'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify({message:'this is a GET response'}))
    }else if(req.method==='POST' && req.url==='/post-data'){
        let body='';
        req.on('data',(chunk)=>{
            body=body+chunk;
        })
        req.on('end',()=>{
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify({message:'post data received',data:body}))
        })
    }else{
    res.writeHead(404,{'content-type':'application/json'})
    res.end(JSON.stringify({error:'not found'}))
}
})
server.listen(3000,()=>{
    console.log('server is running on http://localhost:3000`')
})