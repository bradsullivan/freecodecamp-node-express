
var express = require('express');
var app = express();
const path = require('path');

// --> 7)  Mount the Logger middleware here
app.use((req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");


/** 2) A first working Express Server */
// app.get("/",(req,res) => {
//     res.end("Hello Express");
// });

/** 3) Serve an HTML file */
app.get("/",(req,res) => {
    console.log( path.join(__dirname,"views","index.html") );
    res.sendFile(path.join(__dirname,"views","index.html"));
    // res.sendFile("/", "./views/index.html");
});

/** 4) Serve static assets  */
app.use(express.static(`${__dirname}/public`));

/** 5) serve JSON on a specific route */
app.get("/json",(req,res)=>{
    res.json({"message": "Hello json"});
});

/** 6) Use the .env file to configure the app */
// ENV variable has to be set in-line as far as I can tell (without the use of some other config or package at least). Can't just set a Bash env variable. Need to set it like: MESSAGE_STYLE=uppercase node server.js
 app.get("/json",(req,res)=>{
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE.toLowerCase() == "uppercase".toLowerCase()) message = message.toUpperCase();
    res.json({"message": message});
});
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use((req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
