const express=require('express')
const cors=require("cors")
const app = express();
app.use(cors())
var username="hari"
var password=123
app.use(express.json())
app.post("/login", function(req,res){
  if(req.body.username == username && Number (req.body.password) == password){
    res.send(true);
  } else {
    res.send(false);
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  
});