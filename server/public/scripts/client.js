console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing tasks on page load
  getTasks();

});

//on click, the addTask function will run to add task to database and eventually DOM
function setupClickListeners (){
    $('#addTaskButton').on('click', addTask);
   
}

function addTask (){
    let taskToAdd = {
        task: $('#taskIn').val(),
        completed: false, //Do I need to change this?
    }
console.log(taskToAdd);
 //need to add post route
//clear input in then
$.ajax({
    type: 'POST',
    url: '/tasks',
    data: taskToAdd
  }).then(function(response){
    console.log(response);
    getTasks();
    $('#taskIn').val('');
  }).catch(function(error){
    console.log('error in adding task post', error);
    alert('Error adding task.  Please try again!');
  });
}

function getTasks(){
 
    // ajax call to server to get koalas
    $.ajax({
      type: 'GET',
      url: '/tasks'
    }).then(function(response){
      console.log(response);
      renderTasks(response);
    }).catch(function(error){
      console.log('Error in Get', error);
    });
    
  }

//does it need an argument?
//I need to add a boolean value?
function renderTasks (tasks){
    $('#viewTasks').empty();
  
    for(let task of tasks){
      $('#viewTasks').append(`
        <tr data-id="${task.id}">
            <td><button class="${task.completed}">Mark Completed</button></td>
            <td>${task.task}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
      `);
    }
  }