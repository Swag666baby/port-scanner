import * as scann from "portscanner"
import * as readline from "readline"

const ports = [20, 21, 22, 23, 25, 53, 67, 68, 69, 80, 88, 110, 123, 135, 137, 138, 139, 143, 161, 162, 179, 194, 389, 443, 445, 464, 500, 514, 636, 873, 989, 990, 993, 995, 1025, 1080, 1194, 1433, 1434, 1521, 1723, 2049, 2082, 2083, 3306, 3389, 5432, 5900, 8080, 8443]

const input = readline.createInterface({input: process.stdin, output: process.stdout})
    console.log("    ==========================================\n    port scann\n    by: Swag666baby\n    ==========================================\n\n");
    input.question("digite o ip: ", async(ip) => {
        input.close()
        for(const port of ports){
            const status = await scann.checkPortStatus(port, ip)
            console.log(`port: ${port}, status: ${status}`)
        }
    }
)
 
