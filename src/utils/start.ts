import {main} from "../tools/scann";
import {readFileSync} from "fs";

const bufferFile: Buffer = readFileSync("./src/json/ports.json");
const ports: number[] = JSON.parse(bufferFile.toString());

export const startCode = async(ip: string) => {
    for(const port of ports){
        const status = await main(port, ip);
        console.log(`port: ${port} | status: ${status}`);
    }
}