// todo item index 
let itemIndex = 1;

function todoAdd() {
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
        <button type="button" class="btn btn-danger btn-sm">Delete</button>
    </td>
    `;
    // appending element to container 
    todoContainer.appendChild(tableRow);

    // clearing the todo input field 
    todoInput.value = '';

    // Item index increase by 1
    itemIndex++

}