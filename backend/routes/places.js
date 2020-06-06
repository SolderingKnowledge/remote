// const express = require("express");
// const router = express.Router();

// // route:       localhost:5000/places
// // description: get the route for testing
// //access :      Public

// router.get("/", async (req, res, next)=>{
//     console.log("GET request");
//     res.json({ message: "Yay! you got my attention"})
// })

// // route:       localhost:5000/places/user/id
// // description: get the route for testing
// //access :      Public
// router.get("/user/:id", async (req, res, next)=>{
//     const id = req.params.id;
//     console.log(id);
//     res.status(200).json({message: id});// by default the status is: 200
// });

// module.exports = router;