//node app.js Bhargavi Raju
/*console.log('Arguments',process.argv);
console.log(process)*/
/*require('dotenv').config()
console.log('api key:',process.env.API_KEY)
console.log('Database Password:',process.env.DB_PASSWORD)
console.log('server running on port:',process.env.PORT)*/
process.stdout.write('What is your name? ');

// Handle the input event
process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Convert buffer to string
    console.log(`Hello, ${name}!`);
    process.exit(); // Exit the program
});