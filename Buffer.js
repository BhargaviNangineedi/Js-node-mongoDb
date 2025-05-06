/*const buffer=Buffer.from("bhargavi");
console.log(buffer);
console.log(buffer.toString())*/
const buf=Buffer.alloc(4)
buf.write("Raju")
console.log(buf.toString())