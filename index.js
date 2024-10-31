import express from 'express';
const app = express();
const port = 3000;

// Giả sử dữ liệu tasks được lưu trữ trong một mảng
let tasks = [];

// Route để lấy danh sách tất cả các tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Route để tạo một task mới
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(newTask);
});

// Route để lấy thông tin một task cụ thể
app.get('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found'   
 });
  }
});

// Route để cập nhật thông tin một task
app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    res.json(tasks[index]);
  } else {
    res.status(404).json({ message: 'Task not found'   
 });
  }
});

// Route để xóa một task
app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: 'Task deleted' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});