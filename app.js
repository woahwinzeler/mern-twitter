const express = require("express")
const app = express(); 

app.get("/", (req, res) => {
  res.send("hello world")
});

const port = process.env.PORT || 5000; 

app.listen(5000, () => {
  console.log(`listening on port ${port}`)
})