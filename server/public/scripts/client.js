console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing tasks on page load
//   getTasks();

});

//on click, the addTask function will run to add task to database and eventually DOM
function setupClickListeners (){
    $('#addTaskButton').on('click', addTask);
   
}

function addTask (){
    let taskToAdd = {
        task: $('#taskIn').val(),
    }
console.log(taskToAdd);
 //need to add post route
//clear input in then
}