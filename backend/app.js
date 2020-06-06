const express = require("express");
const bodyParser = require("body-parser");

//custom routes
const places = require("./routes/places");
const users = require("./routes/users");
const todo = require("./routes/todo");

const app = express();
const PORT = process.env.PORT || 5000;
// MIDDLEWARE 
// app.use()

// Error handling
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error || 500).json({ msg: error.message || "Server error"});
})

// CORS-issues handling
app.use((req, res, next)=> {
    // postman has it's own rules: don't care about cors, allows all to arrive
    res.setHeader("Access-Control-Allow-Origin", "*");// opening up to all domains

    res.setHeader("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next();
});


// using routes that I imported and filtering routes
app.use("/users", users);

app.use("/todo", todo);

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));