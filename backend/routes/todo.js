const express = require("express");

const Todo = require(".././models/Todos");
const router = express.Router();

router.get("/", async (req, res, next)=>{
    const todos = await Todo.find(); // brings all todos
    res.json(todos);
});

router.post("/add", async (req, res, next)=>{
    try {
        console.log("aikol-req", req.body)
        const newTodo = new Todo({
            text: req.body.text,
            isCompleted: false,
            edit: false
        });
        const todo = await newTodo.save();//store is DB and brings this one back
        res.json(todo);
    } catch (error) {
        console.error(error);
    }
});

router.delete("/:id", async (req, res, next)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        await todo.remove();
        console.log("aikol-todo",todo);
        res.json(todo);
    } catch (error) {
        console.error(error);
    }
});


module.exports = router;