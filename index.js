const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click',   
 () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';

        // Thêm nút xóa và đánh dấu hoàn thành
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Hoàn thành';
        completeButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
        li.appendChild(completeButton);
    }
});