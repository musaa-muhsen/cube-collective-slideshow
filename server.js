const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');


// if (process.env.NODE_ENV === "production"){
//    app.use(express.static("build"));
//    app.get("*", (req, res) => {
//      res.sendFile(path.resolve(__dirname,  "build", "index.html"));
//    });
//  }
//console.log(cors)
app.use(cors())

// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/build', 'index.html'));
//   });

  if (process.env.NODE_ENV === "production"){
    app.use(express.static("/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "build", "index.html"));
    });
  }


const port = process.env.PORT || 3333;
//killall node
app.listen(port, () => `Server running on port ${port}`);