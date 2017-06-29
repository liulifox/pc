var http = require("http");
var fs = require("fs");
http.createServer(function (req, res) {
    var url=req.url;
    switch(url){
        case "/img.html":
            fs.readFile("index/img.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end (data)
                }
            });
            break;
        case "/img.css":
            fs.readFile("index/img.css", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/css;charset=utf8"});
                    res.end (data)
                }
            });
            break;
        case "/img.js":
            fs.readFile("index/img.js", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/javascript;charset=utf8"});
                    res.end (data)
                }
            });
            break;
        case "/demo.html":
            fs.readFile("index/demo.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end (data)
                }
            });
            break;
        case "/index.html":
            fs.readFile("index/index.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end (data)
                }
            });
            break;
        case "/tu1.png":
            fs.readFile("index/tu1.png", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "image/png"});
                    res.end (data)
                }
            });
            break;
        default:res.end("404 not fond")
    }
}).listen(3000);




