const express = require("express");
const router = express.Router();

const arr = [
    {
        text: "Do laundry",
        isCompleted: false,
        edit: false
    },
    {
        text: "Read a book",
        isCompleted: false,
        edit:false
    }
];

router.get("/", async (req, res, next)=>{
    console.log("GET request");
    // res.json({msg: "hello"});
    res.json(arr);
})

module.exports = router;