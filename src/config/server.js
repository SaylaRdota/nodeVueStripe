const express = require('express'), cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
var methodOverride = require("method-override");

const app = express()

//sql connection test


//settings
// app.set('views', path.join(__dirname, '../app/views'))
// app.use(function (req, res, next) {
//
//     var allowedOrigins = ['*'];
//     var origin = req.headers.origin;
//     if (allowedOrigins.indexOf(origin) > -1) {
//         console.log('wasd')
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     res.header('Access-Control-Allow-Origin', 'http://localhost:8081/');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     return next();
// });

app.use(express.static('views'));
app.use(cors({credentials: true, origin: true}))
var serverPort = process.env.PORT || 8083
app.set('port', serverPort)

//middleware
app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true}));
app.use(methodOverride("_method"));


module.exports = app
