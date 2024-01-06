const taskList = document.querySelector("#taskList");
let taskInput = document.querySelector("#taskInput");

function addTask() {
 

  //Get the task value
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    //Create a new list item
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // let span = document.createElement('span')
    // span.innerHTML = '\u00d7'
    // li.appendChild(span)

    // newTask.onclick = function () {
    //   taskList.removeChild(newTask);
    // };
    //Append the new task to the task list
    taskList.appendChild(newTask);

    //Clear the input field
    taskInput.value = "";
    saveData()

  } else {
    alert("Please enter a task!");
  }
}

taskList.addEventListener('click', function(e)
{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
    saveData()
  }
  else if(e.target.tagName === 'SPAN')
  e.target.parentElement.remove()
  saveData()
}, false)

//to save data on local sttorage so that data remain on screen after refreshing the page
function saveData(){
  localStorage.setItem("data", taskList.innerHTML)
}

//data remain saved even after exiting the browser
function displayData(){
  taskList.innerHTML = localStorage.getItem('data')
}
displayData()