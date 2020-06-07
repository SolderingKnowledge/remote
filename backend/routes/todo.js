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
            edit: false,
            priority: 0,
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
        const todos = await Todo.find();
        console.log("aiko-res", todos);
        res.json(todos);
    } catch (error) {
        console.error(error);
    }
});

router.put("/:id", async (req, res, next)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        todo.edit = "true";
        await todo.save();
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
    }
});

router.post("/:id", async (req, res, next)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        todo.edit = "false";
        todo.text = req.body.text;
        await todo.save();

        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
    }
});

router.put("/complete/:id", async (req, res, next)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        todo.isCompleted = !todo.isCompleted;
        await todo.save();
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
    }
});

router.put("/increment/:id", async (req, res, next)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        todo.priority += 1;
        await todo.save();
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
    }
});

router.put("/decrement/:id", async (req, res, next)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        if(todo.priority > 0){
            todo.priority -= 1;
        }
        await todo.save();
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
    }
});


module.exports = router;