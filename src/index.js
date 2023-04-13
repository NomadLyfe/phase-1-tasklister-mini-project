document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.textContent = `${form.querySelector('#new-task-description').value}  `;
    newLi.className = 'listItem'
    if (form.querySelector('#dropdown').value === 'High Priority') {
      newLi.style.backgroundColor = 'red';
    } else if (form.querySelector('#dropdown').value === 'Medium Priority') {
      newLi.style.backgroundColor = 'yellow';
    } else if (form.querySelector('#dropdown').value === 'Low Priority') {
      newLi.style.backgroundColor = 'green';
    }
    const dueDate = document.createElement('span');
    dueDate.textContent = `${form.querySelector('#duedate').value}  `;
    newLi.appendChild(dueDate);
    const btn = document.createElement('button');
    btn.textContent = 'x';
    btn.style.verticalAlign = 'middle';
    btn.style.paddingTop = '2px'
    btn.style.paddingBottom = '3px'
    btn.style.fontSize = '10px';
    newLi.appendChild(btn);
    if (newLi.style.backgroundColor === 'green') {
      document.querySelector('#LowTasks').appendChild(newLi);
    } else if (newLi.style.backgroundColor === 'yellow') {
      document.querySelector('#MedTasks').appendChild(newLi);
    } else if (newLi.style.backgroundColor === 'red') {
      document.querySelector('#highTasks').appendChild(newLi);
    } else if (newLi.style.backgroundColor === '') {
      document.querySelector('#tasks').appendChild(newLi);
    }
    btn.addEventListener('click', (e) => e.target.parentNode.remove());
    form.reset();
  })
});
