/*const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/LogIn', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

  app.listen(3000, () => console.log('API is running on http://localhost:3000/LogIn'));
*/

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    })
})

app.listen(3002, () => console.log('API is running on localhost:8080/login '))