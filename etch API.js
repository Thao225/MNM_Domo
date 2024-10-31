
fetch('https://thao225.github.io/MNM_Domo/')
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

fetch('https://thao225.github.io/MNM_Domo/', {
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