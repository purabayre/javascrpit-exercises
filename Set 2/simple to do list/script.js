'use strict';

/*
Build a basic todo list:

- Input field + Add button
- Clicking Add creates a new todo item below
- Each todo has the text + a delete button
- Clicking delete removes that todo
- Enter key should also add todo (not just button click)
- Clear input field after adding


*/
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

function addTodo() {
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTodo);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
