var express = require('express');
var app = express();
app.get('/', function (req, res){
  res.send('You have now learned node.js')
}
)
app.listen(3000,function (){
  console.log('hello world')
})
