const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/api", (req,res)=> {
    res.send("this is so cool")
})
app.listen(3000, ()=>{console.log("listening to port 3000...")})
