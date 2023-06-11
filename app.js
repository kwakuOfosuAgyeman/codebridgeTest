const express = require('express');
const pingRouter = require('./routes/ping');
const dogsRouter = require('./routes/dogs');
const dogRouter = require('./routes/dog');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/ping', pingRouter);
app.use('/dogs', dogsRouter);
app.use('/dog', dogRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
