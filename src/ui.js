'use strict';

// event listener for the dropdown menu list
const uiFunctions = (
    function () {
        document.querySelector('.navSvg').addEventListener('click', function() {
            if (document.querySelector('.left').classList.contains('show')) {
                document.querySelector('.left').classList.remove('show');
            }
            else {
                document.querySelector('.left').classList.add('show');
            }
        })


// event listeners for toggling the check box and deleting an item from the DOM
        document.querySelector('.taskList').addEventListener('click', (e) => {
            if (e.target.classList.contains('fa-check-square')) {
                e.target.classList.remove('fa-check-square');
                e.target.classList.add('fa-square');
            }
            else if (e.target.classList.contains('fa-square')) {
                e.target.classList.remove('fa-square');
                e.target.classList.add('fa-check-square');
            }
            else if (e.target.classList.contains('fa-trash-alt')) {
                e.target.parentNode.remove();
            }
        })
}
)()

// function to add new task to current list

export default uiFunctions