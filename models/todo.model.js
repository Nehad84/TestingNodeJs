const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema({
    todo: {type: String, required: true},
    done: {type: String, required: true, default: false}
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;
