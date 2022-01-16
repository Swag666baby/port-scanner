const portscanner = require("portscanner")
const readline = require("readline")
const execSync = require("child_process").execSync

	console.log(execSync("clear", {encoding: "utf-8"}))

	const input = readline.createInterface({
	input: process.stdin, output: process.stdout})
	console.log("==========================================\n        port scann\n        by: Swag666baby\n==========================================\n\n")
	input.question("digite o ip: ",
	function(answer){
	const ip = answer
	input.close()
	portscanner.checkPortStatus(20, `${ip}`).then(status =>{ console.log(`\nPORTA 20: ${status}`)}).catch(err =>console.log("ERROR"))
	
		portscanner.checkPortStatus(25, `${ip}`).then(status =>{ console.log(`\nPORTA 25: ${status}`)}).catch(err =>console.log("ERROR"))
	
	portscanner.checkPortStatus(50, `${ip}`).then(status =>{ console.log(`\nPORTA 50: ${status}`)}).catch(err =>console.log("ERROR"))
	
	portscanner.checkPortStatus(80, `${ip}`).then(status =>{ console.log(`\nPORTA 80: ${status}`)}).catch(err =>console.log("ERROR"))
	
	portscanner.checkPortStatus(220, `${ip}`).then(status =>{ console.log(`\nPORTA 220: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(250, `${ip}`).then(status =>{ console.log(`\nPORTA 250: ${status}`)}).catch(err =>console.log("ERROR"))
	
	portscanner.checkPortStatus(443, `${ip}`).then(status =>{ console.log(`\nPORTA 443: ${status}`)}).catch(err =>console.log("ERROR"))
	
	portscanner.checkPortStatus(550, `${ip}`).then(status =>{ console.log(`\nPORTA 550: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(2000, `${ip}`).then(status =>{ console.log(`\nPORTA 2000: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(3000, `${ip}`).then(status =>{ console.log(`\nPORTA 3000: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(3500, `${ip}`).then(status =>{ console.log(`\nPORTA 3500: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(4000, `${ip}`).then(status =>{ console.log(`\nPORTA 4000: ${status}`)}).catch(err =>console.log("ERROR"))
	
	portscanner.checkPortStatus(5000, `${ip}`).then(status =>{ console.log(`\nPORTA 5000: ${status}`)}).catch(err =>console.log("ERROR"))
	
	portscanner.checkPortStatus(5050, `${ip}`).then(status =>{ console.log(`\nPORTA 5050: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(6000, `${ip}`).then(status =>{ console.log(`\nPORTA 6000: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(7000, `${ip}`).then(status =>{ console.log(`\nPORTA 7000: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(8080, `${ip}`).then(status =>{ console.log(`\nPORTA 8080: ${status}`)}).catch(err =>console.log("ERROR"))
		
	portscanner.checkPortStatus(9000, `${ip}`).then(status =>{ console.log(`\nPORTA 9000: ${status}`)}).catch(err =>console.log("ERROR"))
	
	})
	
