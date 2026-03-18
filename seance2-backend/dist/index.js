import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as os from 'os';
import * as http from 'http';
// let content = fs.readFileSync('./src/data.txt','utf-8');
console.log("iteration 1 started");
async function readContentFromFile() {
    try {
        let content = await fsPromises.readFile('./src/data.txt', 'utf-8');
        console.log("iteration 2 started");
        console.log(content);
        await fsPromises.writeFile('./src/output.txt', 'new file created', 'utf-8');
    }
    catch (err) {
        console.log(err);
    }
}
readContentFromFile();
console.log("iteration 3 started");
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log("total memory : ", totalMemory / 1024 / 1024 / 1024, "GB");
console.log("free memory : ", freeMemory / 1024 / 1024 / 1024, "GB");
console.log(`CPU: ${os.cpus().length} coeurs disponibles`);
let serveur = http.createServer((req, res) => {
    console.log("server created successufly");
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            name: "Ahmed gafsi",
            email: "ahmed@gmail.com",
            role: "Admin"
        }));
        // res.end("Hey am working")
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: " Ressource Not Found" }));
        // res.end("not found")
    }
});
serveur.listen(8080, () => {
    console.log("Serveur is running ");
});
// console.log("file content : ", content);
//# sourceMappingURL=index.js.map