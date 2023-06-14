const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
// const tedious = require('tedious');
require('dotenv').config();



const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', routes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
