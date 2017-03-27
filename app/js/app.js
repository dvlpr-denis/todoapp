'use strict';

document.getElementById;

// get value in input on click and create li-item

document.getElementById('add').addEventListener('click', function () {

	var item = document.getElementById('item');

	if (item.value) {

		addItem(item.value);
	}

	item.value = '';
});

//add item function
var addItem = function addItem(text) {
	var todoList = document.getElementById('todo-list');

	var item = document.createElement('li');

	item.className = "todo-list-item";

	item.innerHTML = text;

	createButton(item);

	todoList.insertBefore(item, todoList.children[0]);
};

//create and append buttons

var createButton = function createButton(li) {
	var tresh = document.createElement('div');

	tresh.className = 'tresh';

	tresh.id = 'tresh';

	tresh.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';

	var complete = document.createElement('div');

	complete.className = 'complete';

	complete.id = 'complete';

	complete.innerHTML = '<img src="img/complete.png" alt="">';

	li.append(tresh);
	li.append(complete);
};
