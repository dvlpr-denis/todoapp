'use strict';

// get value in input on click and create li-item


$('.add').on('click', function () {

	var valueItem = $('.item').val();

	if (valueItem !== '' && valueItem != null) addItem(valueItem);
});

var addItem = function addItem(text) {
	var item = $('<li class="todo-list-item"> ' + text + ' </li>'),
	    todoList = $('.todo-list');

	todoList.append(item);
};
