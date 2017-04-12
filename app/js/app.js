'use strict';

var data = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];

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

//tresh item function

//const removeItem = () => {

//	var item = this.parentNode,
//			parent = item.parentNode,
//			id = parent.id,
//			value = item.innerText;
//	
//	data.splice(data.indexOf(value), 1);
//	
//	toLocalStorage(data);
//	
//	
//	parent.removeChild(item);
//	
//};

//add item function
var addItem = function addItem(text) {

	toDom(text);

	data.push(text);

	toLocalStorage(data);
};

var toLocalStorage = function toLocalStorage(arr) {
	localStorage.setItem('todolist', JSON.stringify(arr));
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

		data.splice(data.indexOf(value), 1);

		toLocalStorage(data);

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
	for (var i = 0; i < data.length; i++) {
		toDom(data[i]);
	}
};

render(data);
