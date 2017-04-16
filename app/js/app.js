'use strict';

var data = localStorage.getItem('todolist').lenght ? JSON.parse(localStorage.getItem('todolist')) : {
	todo: [],
	completed: []
};

// get value in input on click and create li-item

document.getElementById('add').addEventListener('click', function () {

	var item = document.getElementById('item');

	if (item.value) {

		addItem(item.value);
	}
	item.value = '';

	console.log(data.todo);
});

document.getElementById('item').addEventListener('keydown', function (e) {

	if (e.keyCode === 13 && this.value) {

		addItem(this.value);
		this.value = '';
	}
});

//add item function
var addItem = function addItem(text) {

	toDom(text);

	data.todo.push(text);

	toLocalStorage();
};

var toLocalStorage = function toLocalStorage() {
	localStorage.setItem('todolist', JSON.stringify(data));
};

//create and append buttons

var createButton = function createButton(li) {
	var tresh = document.createElement('div');

	tresh.className = 'tresh';

	tresh.id = 'tresh';

	tresh.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';

	tresh.addEventListener('click', function () {
		var item = this.parentNode,
		    parent = item.parentNode,
		    id = parent.id,
		    value = item.innerText;

		data.todo.splice(data.todo.indexOf(value), 1);

		toLocalStorage();

		parent.removeChild(item);
	});

	var complete = document.createElement('div');

	complete.className = 'complete';

	complete.id = 'complete';

	complete.innerHTML = '<img src="img/complete.png" alt="">';

	li.append(tresh);
	li.append(complete);
};

var toDom = function toDom(text) {

	var todoList = document.getElementById('todo-list');

	var item = document.createElement('li');

	item.className = "todo-list-item";

	item.innerHTML = text;

	createButton(item);

	todoList.insertBefore(item, todoList.children[0]);
};

var render = function render() {

	for (var i = 0; i < data.todo.length; i++) {
		toDom(data.todo[i]);
	}
};

render();
