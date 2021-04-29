'use strict';

import { format } from 'date-fns';
import _ from 'lodash';
import bootstrap from 'bootstrap';
import { uiFunctions, addTask } from './ui'


const date = new Date();
const dateFormat = format(date, 'MM/dd/yyyy');

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = dateFormat;
//     return element;
//   }
  
// document.body.appendChild(component());

let lists = [];

class toDo {
    constructor(_title, _desc, _due, _prio) {
        this.title = _title;
        this.description = _desc;
        this.dueDate = _due;
        this.priority = _prio;
    }
}

class newList {
    constructor(_name) {
        this.name = _name;
    }
}

const groceries = new newList('Groceries');

document.querySelector('#submitTask').addEventListener('click', (e) => {

    const title = document.querySelector('.task-title').value;
    const desc = document.querySelector('.task-desc').value;
    const due = document.querySelector('.task-date').value;
    const prio = document.querySelector('.task-status').value;


    if (title === '') {
        alert('Please add task name.');
    }
    else {
        const task = new toDo(title, desc, due, prio);
        console.log(task);
        addTask(task.title);
        document.querySelector('#modalTaskClose').click();
    }
})

addTask('cereal');
addTask('bananas');

// let lists = [
//     [
//         this.title, this.description, this.dueDate, this.priority
//     ],
//     [
//         this.title, this.description, this.dueDate, this.priority
//     ],
//     [
//         this.title, this.description, this.dueDate, this.priority
//     ]
// ]
