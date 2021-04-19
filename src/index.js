import { format } from 'date-fns';
import _ from 'lodash';
import bootstrap from 'bootstrap';
import uiFunctions from './ui'

const date = new Date();
const dateFormat = format(date, 'MM/dd/yyyy');

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = dateFormat;
//     return element;
//   }
  
// document.body.appendChild(component());

class toDo {
    constructor(_title, _desc, _due, _prio) {
        this.title = _title;
        this.description = _desc;
        this.dueDate = _due;
        this.priority = _prio;
    }
}

let ex = new toDo('Shopping', 'Go shopping', dateFormat, 'high');
console.log(ex);