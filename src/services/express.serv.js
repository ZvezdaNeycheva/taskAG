const express = require("express");
const app = express();
const port = 3000;
const router =express.Router()
import {getAllPics}from './controllers.js'

router.route('/').get(getAllPics)

app.post("/", (req, res) => {
    res.status(200).json({
      id:'',
      picUrl:''
    });
  });

  app.put("/:id", (req, res) => {
    res.status(200).json({
      id:'',
      picUrl:''
    });
  });

  app.delete("/:id", (req, res) => {
    res.status(200).json({
      id:'',
      picUrl:''
    });
  });
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

module.exports=express.Router