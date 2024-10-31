const mongoose = require('mongoose');

const uri = 'mongodb+srv://buithienhuongthao2005:T6ypmrH9niWs9BH4@ClusterMNM.mongodb.net/todo-app>?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

  const mongoose = require('mongoose');

  const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
  });
  
  const Task = mongoose.model('Task', taskSchema);   
  
  
  module.exports = Task;


const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// ... các route khác để thêm, cập nhật, xóa công việc

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const Task = require('./yourTaskModel'); // Import model
// Tạo một task mới
const newTask = new Task({
  title: 'Learn Mongoose',
  description: 'Learn how to use Mongoose ODM',
  completed: false
});

newTask.save()
  .then(task => console.log(task))
  .catch(err => console.error(err));

// Lấy tất cả các tasks
Task.find()
  .then(tasks => console.log(tasks))
  .catch(err => console.error(err));

// Tìm một task theo ID
Task.findById('your_task_id')
  .then(task => console.log(task))
  .catch(err => console.error(err));

// Cập nhật một task
Task.findByIdAndUpdate('your_task_id', { completed: true })
  .then(task => console.log(task))
  .catch(err => console.error(err));

// Xóa một task
Task.findByIdAndDelete('your_task_id')
  .then(() => console.log('Task deleted'))
  .catch(err => console.error(err));