const http = require("http");
const fs = require("fs");
const os = require("os");
const ip = require('ip');

function upTime(){
    var upTime_seconds = os.uptime();
    var upTime_minutes = upTime_seconds/60;
    var upTime_hours = upTime_minutes/60;
    var upTime_days = upTime_hours/24;
    upTime_seconds = Math.floor(upTime_seconds);
    upTime_minutes = Math.floor(upTime_minutes);
    upTime_hours = Math.floor(upTime_hours);
    upTime_days = Math.floor(upTime_days);
    upTime_hours = upTime_hours%24;
    upTime_minutes = upTime_minutes%60;
    upTime_seconds = upTime_seconds%60
    serverUptime = ("Days: " + upTime_days + ", Hours: " + upTime_hours + ", Minutes: " + upTime_minutes + ", Seconds: " + upTime_seconds);
    return(serverUptime);
}

function totalMemory(){
    totalMemory = os.totalmem();
    totalMemoryMB = Math.floor(totalMemory/(1024*1024));
    return(totalMemoryMB + " MB");
}

function freeMemory(){
    freeMemory = os.freemem();
    freeMemoryMB = Math.floor(freeMemory/(1024*1024));
    return(freeMemoryMB + " MB");
}

function CPUs(){
    totalCPUs = os.cpus().length;
    return(totalCPUs)
}

http.createServer((req, res) => {
  if (req.url === "/") {
      fs.readFile("./public/index.html", "UTF-8", (err, body) => {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(body);
    });
  } else if(req.url.match("/sysinfo")) {
    myHostName=os.hostname();
    html=`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node JS Response</title>
      </head>
      <body>
        <p>Hostname: ${myHostName}</p>
        <p>IP: ${ip.address()}</p>
        <p>Server Uptime: ${upTime()} </p>
        <p>Total Memory: ${totalMemory()} </p>
        <p>Free Memory: ${freeMemory()} </p>
        <p>Number of CPUs: ${CPUs()} </p>
      </body>
    </html>`
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end(`404 File Not Found at ${req.url}`);
  }
}).listen(3000);

console.log("Server listening on port 3000");