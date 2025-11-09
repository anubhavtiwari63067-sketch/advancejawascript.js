// script.js

// 1. ज़रूरी elements को पकड़ना (DOM Selection)
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// 2. Button पर click होने पर नया task जोड़ना
addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim(); // फालतू whitespace हटाना

    if (taskText === "") {
        alert("कृपया कोई कार्य लिखें!");
        return; // अगर input खाली है तो फ़ंक्शन से बाहर निकल जाओ
    }

    // नया <li> element बनाना
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">हटाएँ</button>
    `;

    // 3. Task को पूरा मार्क करना (Toggle 'completed' class)
    listItem.addEventListener('click', function(event) {
        // अगर delete button पर क्लिक नहीं किया गया है, तभी toggle करें
        if (!event.target.classList.contains('delete-btn')) {
            listItem.classList.toggle('completed');
        }
    });

    // 4. Delete button functionality
    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem); // लिस्ट आइटम को हटाना
    });

    // List में नया item जोड़ना
    taskList.appendChild(listItem);

    // Input field को खाली करना
    taskInput.value = '';
}