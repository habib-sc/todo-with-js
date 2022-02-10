// todo item index 
let itemIndex = 1;

document.getElementById('todo-add-btn').addEventListener('click', function() {
    // Getting todo input 
    const todoInput = document.getElementById('todo-input');
    // Getting todo container 
    const todoContainer = document.getElementById('todo-container');
    // Create Element 
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
     <th scope="row">${itemIndex}</th>
     <td>${todoInput.value}</td>
     <td class="w-25"><button type="button" class="btn btn-success btn-sm">Done</button>
         <button type="button" class="btn btn-primary btn-sm">Edit</button>
         <button type="button" class="todo-delete-btn btn btn-danger btn-sm">Delete</button>
     </td>
     `;
    // appending element to container 
    todoContainer.appendChild(tableRow);

    // clearing the todo input field 
    todoInput.value = '';

    // Item index increase by 1
    itemIndex++

    // Todo Delete feature 

    // Getting delete buttons
    const deleteButtons = document.getElementsByClassName('todo-delete-btn');
    // button iteration 
    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', function(event) {
            // Getting todo item row 
            const todoItem = event.target.parentNode.parentNode;
            // displaying as none 
            todoItem.style.display = 'none';
        })
    }
})