const dotenv = require('dotenv')
const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const cors = require('cors');
dotenv.config();

const PORT = process.env.PORT;

var app = express();
app.use(cors({
  credentials: true,
  origin: true,
  exposedHeaders: ['set-cookie']
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// Passport config
require('./middleware/passport')(passport)


// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


app.use(require("./routes/index"))

// Start server
app.listen(PORT, console.log(`listening at ${PORT}`))
