window.onload = function () {

    let textInput = document.querySelector('#texto-tarefa');
    let addTaskButton = document.querySelector('#criar-tarefa');
    let taskList = document.querySelector('#lista-tarefas');
    let completedTask = document.querySelector('#lista-tarefas');
    let clearAllButton = document.querySelector('#apaga-tudo');
    let clearCompletedButton = document.querySelector('#remover-finalizados');

    addTaskButton.addEventListener('click', function() {
        if (textInput.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = textInput.value;
            newLi.className = 'task'
            textInput.value = null;
            taskList.appendChild(newLi);
        };
    });
    
    taskList.addEventListener('click', function(event) {
        let backgroundColor = event.target
        let clear = document.getElementsByClassName('task');
        for (index = 0; index < clear.length; index += 1) {
            clear[index].style.backgroundColor = '';
            clear[index].classList.remove('selected');
        }
        backgroundColor.style.backgroundColor = 'rgb(128, 128, 128)';
        backgroundColor.classList.add('selected');
    });

    completedTask.addEventListener('dblclick', function(event) {
        let completed = event.target;      
        if (completed.classList.contains('completed')) {
            completed.classList.remove('completed');
        } else {
            completed.classList.add('completed');
        }; 
    });
    //'classList.contains' retirado do site: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList

    clearAllButton.addEventListener('click', function() {
        let list = document.getElementById('lista-tarefas');
        let tasks = document.getElementsByClassName('task');
        if (tasks.length > 0) {
            for (index = tasks.length-1; index >= 0; index -= 1) {
                let element = tasks[index];
                list.removeChild(element);
            };
        };
    });

    clearCompletedButton.addEventListener('click', function() {
        let list = document.getElementById('lista-tarefas');
        let completed = document.getElementsByClassName('completed');
        console.log(completed);
        if (completed.length > 0) {
            for (index = completed.length-1; index >= 0; index -= 1) {
                let element = completed[index];
                list.removeChild(element);
            };
        };
    });
};

let header = document.createElement('header');
document.body.appendChild(header);

let headerH1 = document.createElement('h1');
headerH1.id = 'title';
header.appendChild(headerH1);
headerH1.innerHTML = "Minha Lista de Tarefas";

let headerParagraph = document.createElement('p');
headerParagraph.id = 'funcionamento'
header.appendChild(headerParagraph)
headerParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

let inputSection = document.createElement('section');
document.body.appendChild(inputSection);

let input = document.createElement('input');
input.id = 'texto-tarefa';
inputSection.appendChild(input);

let buttonAdd = document.createElement('button');
buttonAdd.id = 'criar-tarefa';
buttonAdd.innerHTML = 'Adicionar';
inputSection.appendChild(buttonAdd);

let listSection = document.createElement('section');
document.body.appendChild(listSection);

let todoList = document.createElement('ol');
todoList.id = 'lista-tarefas';
listSection.appendChild(todoList);

let clearSection = document.createElement('section');
clearSection.id = 'remove-tarefas';
document.body.appendChild(clearSection);

let buttonClearAll = document.createElement('button');
buttonClearAll.id = 'apaga-tudo';
buttonClearAll.innerText = 'Limpar Lista';
clearSection.appendChild(buttonClearAll);

let buttonClearCompleted = document.createElement('button');
buttonClearCompleted.id = 'remover-finalizados';
buttonClearCompleted.innerText = 'Limpar Finalizados';
clearSection.appendChild(buttonClearCompleted);