const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sohail:Sohail%40786@task-manager.srbzyu1.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model('todos', todoSchema)
module.exports = { todo }