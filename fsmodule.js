
const fs=require('fs')
fs.writeFile('firstone.txt',"this is my first prg",(err)=>{
    if(err) throw error
    console.log('file created successfully')
})
fs.appendFile('firstone.txt','i love raju',(err)=>{
    if(err)throw error
    console.log('data appended')
})
fs.readFile('firstone.txt','utf8',(err,data)=>{
    if(err)throw error
    console.log('content in file:',data)
})
