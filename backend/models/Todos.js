const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
        text: String,
        isCompleted: Boolean,
        edit: Boolean,
        priority: Number,
})

module.exports = Todo = mongoose.model("todo", TodoSchema);