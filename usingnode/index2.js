/*const fs = require("fs");

var msg = "Hello From Gay";
fs.writeFile("message.txt",msg,function (err){
    if(err) throw err;
    console.log("File saved!");

});*/


const fs = require("fs");

var msg = "Hello From Gay";
fs.readFile("./message.txt","utf-8", (err,data) => {
    if(err) throw err;
    console.log(data);

});