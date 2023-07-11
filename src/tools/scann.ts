import {Socket} from "net";
let data = "";

const connectToServer = (port: number, ip: string): Promise<void> => {
    return new Promise(async(resolve) => {
        const socket = new Socket;
        socket.setTimeout(100);
        
        socket.on("connect", async() => {
            data = "open";
            await resolve();
            socket.destroy();
        });
        
        socket.on("timeout", async() => {
            data = "close";
            await resolve();
            socket.destroy();
        });
        
        socket.on("error", async() => {
            data = "error";
            await resolve();
            socket.destroy();
        });
        
        socket.connect(port, ip);
    });
}
export const main = async(port: number, ip: string) => {
    await connectToServer(port, ip);
    return data;
}