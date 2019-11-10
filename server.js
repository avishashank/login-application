const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

 // Serve any static files
 app.use(express.static(path.join(__dirname, './build')));
 // Handle React routing, return all requests to React app
 app.get('*', function(req, res) {
   res.sendFile(path.join(__dirname, './build', 'index.html'));
 });


app.post('/login', (req,res,next)=> {
  let {email ,password} = req.body;
  if(email === 'demo' && password === 'demo') {
    res.json ({
      username: email,
    })
  } res.json({error: 'username of password is wrong'});
})

app.listen(3000, () => console.log(`Listening on port 3000`));
