'use strict';

//var date = new Date(),
//		hh = date.getHours(),
//		mm = date.getMinutes();
//
//console.log(hh + ':' + mm + ';');

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

var removeItem = function removeItem() {

	var delItem = document.getElementById('tresh').parentNode,
	    parent = delItem.parentNode;
	parent.removeChild(delItem);
};

//add item function
var addItem = function addItem(text) {

	var todoList = document.getElementById('todo-list');

	var item = document.createElement('li');

	item.className = "todo-list-item";

	item.innerHTML = text;

	createButton(item);

	todoList.insertBefore(item, todoList.children[0]);

	var date = new Date(),
	    hh = date.getHours(),
	    mm = date.getMinutes();

	time(item, hh, mm);
};

//create and append buttons

var createButton = function createButton(li) {
	var tresh = document.createElement('div');

	tresh.className = 'tresh';

	tresh.id = 'tresh';

	tresh.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';

	tresh.addEventListener('click', removeItem);

	var complete = document.createElement('div');

	complete.className = 'complete';

	complete.id = 'complete';

	complete.innerHTML = '<img src="img/complete.png" alt="">';

	li.append(tresh);
	li.append(complete);
};

//time when create task

var time = function time(li, hh, mm) {
	var blockTime = document.createElement('div');

	blockTime.className = 'time';

	blockTime.innerHTML = hh + ': ' + mm;

	li.append(blockTime);
};
