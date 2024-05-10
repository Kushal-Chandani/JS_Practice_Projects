function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskType = document.getElementById('taskType').value;
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    const newTask = document.createElement('li');
    newTask.classList.add(taskType);
    newTask.textContent = taskInput.value + ' (' + taskType + ')';
    newTask.dataset.timestamp = new Date().getTime(); // Store timestamp for sorting
    newTask.onclick = function() {
        this.parentNode.removeChild(this);
    };

    document.getElementById('taskList').appendChild(newTask);
    taskInput.value = ''; // Clear the input after adding
}

function sortTasks() {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById("taskList");
    switching = true;
    const sortMethod = document.getElementById("sortMethod").value;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("li");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (sortMethod === "alphabetical" && b[i].textContent.toLowerCase() > b[i + 1].textContent.toLowerCase()) {
                shouldSwitch = true;
            } else if (sortMethod === "time" && parseInt(b[i].dataset.timestamp) > parseInt(b[i + 1].dataset.timestamp)) {
                shouldSwitch = true;
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
    }
}

function filterTasks(type) {
    let list, i, li;
    list = document.getElementById("taskList");
    li = list.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (type === 'all' || li[i].classList.contains(type)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    const tabs = document.getElementsByClassName('tab-link');
    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    document.querySelector(`.tab-link[onclick*="${type}"]`).classList.add('active');
}
