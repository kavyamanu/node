const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/api/courses/:id", (req,res)=> {
    res.send(req.params)
})
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
