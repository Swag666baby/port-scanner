const portscanner = require("portscanner")
const readline = require("readline")
const execSync = require("child_process").execSync

  //console.log(execSync("clear", {encoding: "utf-8"}))

  const input = readline.createInterface({
  input: process.stdin, output: process.stdout})
  console.log("==========================================\n        port scann\n        by: Swag666baby\n==========================================\n\n")
  input.question("digite o ip: ",
  function(answer){
  const ip = answer
  input.close()

const ports = [20,21,22,23,25,42,45,60,80,88,110,120,130,150,443,500,550,600,700,800,2000,3000,4000,5000,6000,7000,8000,8080,9000]
    for (const port of ports) {
      portscanner.checkPortStatus(port, `${ip}`).then(status =>{ console.log(`\nPORTA ${port}: ${status}`)}).catch(err =>console.log("ERROR"))
    }
  })
