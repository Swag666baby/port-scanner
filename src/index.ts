import {createInterface} from "readline";
import {startCode} from "./utils/start";

const input = createInterface({
    input: process.stdin,
    output: process.stdout
});
input.question("enter the ip: ", async(ip) => {
    input.close();
    startCode(ip);
    console.log("\nthanks! :)");
});
