"use strict";

// event listener for the dropdown menu list
const uiFunctions = (function () {
  document.querySelector(".navSvg").addEventListener("click", function () {
    if (document.querySelector(".left").classList.contains("show2")) {
      document.querySelector(".left").classList.remove("show2");
    } else {
      document.querySelector(".left").classList.add("show2");
    }
  });

  // event listeners for toggling the check box and deleting an item from the DOM
  document.querySelector(".taskList").addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-check-square")) {
      e.target.classList.remove("fa-check-square");
      e.target.classList.add("fa-square");
    } else if (e.target.classList.contains("fa-square")) {
      e.target.classList.remove("fa-square");
      e.target.classList.add("fa-check-square");
    } else if (e.target.classList.contains("fa-trash-alt")) {
      e.target.parentNode.remove();
    }
  });

  // event listener for deleting entires lists
  document.querySelector(".listList").addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash-alt")) {
      e.target.parentNode.remove();
    }
  });
})();

// function to add new task to current list
function addTask(title) {
  const taskList = document.querySelector(".taskList");
  const taskButton = document.createElement("button");
  taskButton.classList.add(
    "list-group-item",
    "list-group-item-action",
    "tasks"
  );
  taskButton.innerHTML = `<div><i class="far fa-square"></i> ${title}</div><i class="far fa-trash-alt"></i>`;
  taskList.appendChild(taskButton);
}

export { uiFunctions, addTask };
