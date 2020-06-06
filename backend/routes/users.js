const express = require("express");
const router = express.Router();

// route:       localhost:5000/users
// description: get the route for testing
//access :      Public

router.get("/", async (req, res, next)=>{
    console.log("GET request");
    res.json({ message: "Yay! you got my attention"})
})

// route:       localhost:5000/users/user/id || localhost:5000/users/user/_ will throw a custom error below 
// description: get the route for testing
//access :      Public
router.get("/user/:id", async (req, res, next)=>{
    const id = req.params.id;
    console.log(id);
    // error handling to trigger middleware, which is 1st argument(error)
    if(id==="_"){
        const error = new Error("Error, server failed!");
        error.code = 404;;
        return next(error);// if you in async block then you have to use next()
        // throw error; // otherwise if not async you can use throw!
    }
    res.status(200).json({message: id});// by default the status is: 200
});

module.exports = router;