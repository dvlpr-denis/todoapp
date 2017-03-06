'use strict';

//add item function
var addItem = function addItem(text) {
	var item = $('<li class="todo-list-item">\n\t\t\t\t\t\t\t\t\t\t' + text + ' \n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="tresh">\n            \t\t\t\t\t<i class="fa fa-trash-o" aria-hidden="true"></i>\n            \t\t\t\t</div>\n            \n\t\t\t\t\t\t\t\t\t\t<div class="complete">\n\t\t\t\t\t\t\t\t\t\t\t<img src="img/complete.png" alt="">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>'),
	    todoList = $('.todo-list');

	todoList.append(item);
};

// get value in input on click and create li-item


$('.add').on('click', function () {

	var valueItem = $('.item').val();

	if (valueItem !== '' && valueItem != null) addItem(valueItem);
});
