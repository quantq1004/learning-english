const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();
require('./models');

const { PORT } = require('./configs');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

require('./routes')(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
