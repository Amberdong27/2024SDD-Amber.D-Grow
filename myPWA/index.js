const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('.database/datasource.db');

let myString = '[\n';
db.all("SELECT * FROM studytips", function(err, rows) {
    let myCounter = 0;
    rows.forEach(function (row){
        myString = myString + '{\n "tipID": '+ row.tipID + ',\n "name":"'+ row.name + '",\n "details":"'+ row.details; +",\n";
        myCounter++;
        if (myCounter == rows.length){
            myString = myString + '"\n}\n';
        } else  {
            myString = myString + '"\n},\n';
        }
    });
    var fs = require('fs');
    fs.writeFile ("public/frontEndData.json", myString + "]", function (err){
    if (err) {
        console.log(err);
    }
}
);
});


const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "myPWA/public/index.html"));
});