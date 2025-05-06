const fs=require('fs')
fs.writeFile('file.txt','hello Bhargavi',(err,data)=>{
    if(err) throw err;
    console.log('file created successfully')
})