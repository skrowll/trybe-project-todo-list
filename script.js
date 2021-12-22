window.onload = function () {

    let textInput = document.querySelector('#texto-tarefa');
    let addTaskButton = document.querySelector('#criar-tarefa');
    let taskList = document.querySelector('#lista-tarefas');

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
        let clear = document.getElementsByClassName('task')
        for (index = 0; index < clear.length; index += 1) {
            clear[index].style.backgroundColor = '';
        }
        backgroundColor.style.backgroundColor = 'rgb(128, 128, 128)';
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






//localStorage




// window.onload = function () {

//     let colors = ['black', 'red', 'green', 'blue'];
//     createColors(colors);

//     createClearButton('Limpar');

//     let size = 5;
//     createPixels(size);

//     let colorSelect = document.querySelector('#color-palette');

//     colorSelect.addEventListener('click', function (event) {
//         let colorSelected = event.target.style.backgroundColor;
//         changeSelection(colorSelected);
//     });

//     let colorApply = document.querySelector('#pixel-board');

//     colorApply.addEventListener('click', function (event) {
//         let colorApply = event.target;
//         let colorSelected = document.getElementsByClassName('selected')[0].style.backgroundColor;
//         colorApply.style.backgroundColor = colorSelected;
//     });

//     let clearBoard = document.querySelector('#clear-board');
//     let board = document.getElementsByClassName('pixel');

//     clearBoard.addEventListener('click', function() {
//         for (index = 0; index < board.length; index += 1) {
//             board[index].style.backgroundColor = 'white';
//         }
//     });    
// }

// let header = document.createElement('header');
// document.body.appendChild(header);

// let headerH1 = document.createElement('h1');
// headerH1.id = 'title';
// header.appendChild(headerH1);
// headerH1.innerHTML = "Paleta de Cores";

// let colorPalette = document.createElement('section');
// colorPalette.id = 'color-palette';
// document.body.appendChild(colorPalette);

// function createColors(colors) {
//     for (index = 0; index < colors.length; index += 1) {
//         let color = document.createElement('div');
//         color.style.backgroundColor = colors[index];
//         if (color.style.backgroundColor === 'black') {
//             color.className = 'color';
//             color.classList.add('selected');
//         } else {
//             color.className = 'color';
//         };
//         colorPalette.appendChild(color);
//     }
// };

// let buttonSection = document.createElement('section');
// buttonSection.id = 'button-section';
// document.body.appendChild(buttonSection);

// function createClearButton(buttonName) {
//     let clearButton = document.createElement('button');
//     clearButton.innerHTML = buttonName;
//     clearButton.id = 'clear-board';
//     buttonSection.appendChild(clearButton);
// }

// let pixelBoard = document.createElement('section');
// pixelBoard.id = 'pixel-board';
// document.body.appendChild(pixelBoard);

// function createPixels(size) {
//     for (index = 0; index < size; index += 1) {
//         let line = document.createElement('div');
//         line.className = 'line';
//         pixelBoard.appendChild(line);
//         for (index2 = 0; index2 < size; index2 += 1) {
//             let pixel = document.createElement('div');
//             pixel.className = 'pixel';
//             pixel.style.backgroundColor = 'white';
//             line.appendChild(pixel);
//         }
//     }
// };

// function changeSelection (colorSelected) {
//     let selection = document.getElementsByClassName('color');
//     for (index = 0; index < selection.length ; index += 1) {
//         let color = selection[index].style.backgroundColor;
//         if (color === colorSelected) {
//             selection[index].classList.add('selected');
//         }
//         if (color !== colorSelected) {
//             selection[index].classList.remove('selected');
//         }         
//     }
// }