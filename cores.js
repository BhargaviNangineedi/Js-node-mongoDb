/*const os = require("os");
console.log("Total CPU Cores:", os.cpus().length);*/
/*const { exec } = require("child_process");

exec("dir", (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  console.log(`📂 Files in Directory:\n${stdout}`);
});*/
const { spawn } = require("child_process");

// Run "ls -l" command
const child = spawn("cmd", ["/c", "dir"]);

child.stdout.on("data", (data) => {
  console.log(`📄 File List:\n${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`❌ Error: ${data}`);
});