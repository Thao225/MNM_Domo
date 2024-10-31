
fetch('https://thao225.github.io/MNM_Domo/')
  .then(response => response.json())
  .then(todos => {
    // Hiển thị danh sách công việc lên giao diện
  })
  .catch(error => console.error('Error:', error));

// Thêm một công việc mới
fetch('https://thao225.github.io/MNM_Domo/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ task: 'Learn Fetch API' })
})
.then(response => response.json())
.then(todo => console.log('Todo created:', todo))
.catch(error => console.error('Error:', error));