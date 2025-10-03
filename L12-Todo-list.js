const todoList = [
{name:'make dinner',
 dueDate: '2025-09-04'
}, 
{name:'wash dishez',
 dueDate: '2025-09-05'
}];

displayTodoList();

function displayTodoList( ){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;//destructuring created constants name and dueDate
    const html = `
       <div>${name}</div>
       <div>${dueDate}</div> 
       <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
    todoListHTML += html;

  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', ()=>{
      todoList.splice(index, 1)
      displayTodoList();
    });
  })
}


document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const inputDateElement = document.querySelector('.js-date-input');
  const dueDate = inputDateElement.value;

  todoList.push({name,
                dueDate});

  inputElement.value = '';

  displayTodoList();
}