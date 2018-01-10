const express = require('express');
const morgan = require('morgan');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const port = process.env.PORT || 8080;

let app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  saveUninitialized: true,
  resave: true
}));

app.use('/', (req, res) => {
  res.send('Our first express program!');
  console.log(req.cookies);
  console.log('======================');
  console.log(req.session);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});