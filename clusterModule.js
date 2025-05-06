const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  // This code runs in the main process (like the restaurant manager 🍽️)
  const numCPUs = os.cpus().length;
  console.log(`Master process is running. Spawning ${numCPUs} workers...`);

  // Create one worker per CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // If a worker dies, restart a new one
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died. Starting a new one...`);
    cluster.fork();
  });

} else {
  // This code runs in worker processes (like the chefs 👨‍🍳)
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from Worker ${process.pid}\n`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}