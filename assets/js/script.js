const form = document.getElementById('form-task');
const conteinerTask = document.getElementById('conteiner-task');

form.onsubmit = function(e){
    e.preventDefault();
    const inpTask = document.getElementById('tarefa');
    addTask(inpTask.value);
    form.reset();
}

function addTask(descriptionTask){
    const taskList = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label')
    const taskDescriptionNode = document.createTextNode(descriptionTask);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', descriptionTask);
    newTask.setAttribute('id', descriptionTask);

    taskLabel.setAttribute('for', descriptionTask);
    taskLabel.appendChild(taskDescriptionNode);

    taskList.classList.add('task-item');
    taskList.appendChild(newTask);
    taskList.appendChild(taskLabel);

    conteinerTask.appendChild(taskList);
}