'use strict';

$('.tresh').on('click', function () {
	console.log(this);
});

// get value in input on click and create li-item


$('.add').on('click', function () {

	var valueItem = $('.item').val();

	if (valueItem) {
		addItem(valueItem);

		valueItem = '';
	}
});

//add item function
var addItem = function addItem(text) {
	var todoList = document.getElementById('todo-list');

	var item = document.createElement('li');

	item.className = "todo-list-item";

	item.innerHTML = text;

	todoList.insertBefore(item, todoList.children[0]);
};

//delete item function

var deleteItem = function deleteItem(elem) {
	var todoList = document.getElementById('todo-list');

	todoList.removeChild(elem);
};
