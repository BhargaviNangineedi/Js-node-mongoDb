const fs=require('fs')
fs.writeFile('data.txt','welcome to nodejs',(err)=>{
    if(err){
        console.error('error writing file:',err)
    }
    console.log('file written successfully')
})
const readStream=fs.createReadStream('data.txt','utf8')
readStream.on('data',(chunk)=>{
    console.log('reading chunk:',chunk)
})
const writeStream=fs.createWriteStream('output.txt')
writeStream.write('hello bhargavi,this is writing using streams')
writeStream.end(()=>{
    console.log('data written to output.txt')
})
   