
fetch('http://127.0.0.1:5500/index.html')
  .then(response => response.json())
  .then(data => {
    // Hiển thị danh sách bài viết lên giao diện
    const postsList = document.getElementById('posts');
    data.forEach(post => {
      const li = document.createElement('li');
      li.textContent = post.title;
      postsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

const newPost = { title: 'Bài viết mới', content: 'Nội dung bài viết' };

fetch('http://127.0.0.1:5500/index.html', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newPost)
})
  .then(response => response.json())
  .then(data => {
    console.log('Bài viết đã được tạo:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });