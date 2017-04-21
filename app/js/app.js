'use strict';

var data = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : {
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
});

document.getElementById('item').addEventListener('keydown', function (e) {

	if (e.keyCode === 13 && this.value) {

		addItem(this.value);
		this.value = '';
	}
});

//add item function
var addItem = function addItem(text) {

	toDom(text, false);

	data.todo.push(text);

	toLocalStorage();
};

var toLocalStorage = function toLocalStorage() {
	localStorage.setItem('todolist', JSON.stringify(data));
};

function remove() {
	var item = this.parentNode,
	    parent = item.parentNode,
	    id = parent.id,
	    value = item.innerText;

	data.todo.splice(data.todo.indexOf(value), 1);

	toLocalStorage();

	parent.removeChild(item);
}

function completeFunc() {
	var currItem = this.parentNode,
	    value = currItem.innerText,
	    list = document.getElementById('cmpl'),
	    item = document.createElement('li');

	item.className = "todo-complete-item";

	item.innerHTML = value;

	list.insertBefore(item, list.children[0]);

	data.completed.push(value);

	toLocalStorage();
}

//create and append buttons

var createButton = function createButton(li) {
	var tresh = document.createElement('div');

	tresh.className = 'tresh';

	tresh.id = 'tresh';

	tresh.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';

	tresh.addEventListener('click', remove);

	var complete = document.createElement('div');

	complete.className = 'complete';

	complete.id = 'complete';

	complete.innerHTML = '<img src="img/complete.png" alt="">';

	complete.addEventListener('click', completeFunc);

	li.append(tresh);
	li.append(complete);
};

var toDom = function toDom(text, flag) {

	var todoList = flag ? document.getElementById('cmpl') : document.getElementById('todo-list');

	var item = document.createElement('li');

	item.className = "todo-list-item";

	item.innerHTML = text;

	todoList.id == "todo-list" ? createButton(item) : false;

	todoList.insertBefore(item, todoList.children[0]);
};

var render = function render() {

	if (!data.todo.length && !data.completed.length) return;

	for (var i = 0; i < data.todo.length; i++) {
		toDom(data.todo[i], false);
	}

	for (var i = 0; i < data.completed.length; i++) {
		toDom(data.completed[i], true);
	}
};

render();
