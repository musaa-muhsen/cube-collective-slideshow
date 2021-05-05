  
const express = require('express');
const app = express();

const cors = require('cors');

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === "production"){
   app.use(express.static("build"));
   app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname,  "build", "index.html"));
   });
 }
//console.log(cors)
app.use(cors())



const port = process.env.PORT || 3333;
//killall node
app.listen(port, () => `Server running on port ${port}`);