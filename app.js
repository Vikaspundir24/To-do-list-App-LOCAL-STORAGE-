
const input = document.getElementById("input") // input field
const submit = document.getElementById("submit"); // submit button
const task =  document.querySelector(".task");



showTask(); // Calling the function to add a new task



submit.addEventListener("click", function(e) {

  let  userData = input.value; // user data which is entered
  if(!input.value)
  {
    alert("Please ENTER a TASK")   // If no task is entered
  }

  else{
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
  

  if(getLocalStorage == null){   //if localstorage is null
  listArr = [];  //creating a blank array
  }    
  else{
  listArr = JSON.parse(getLocalStorage); // Transforming json string into a js object
  }

  listArr.push(userData); // pushing or adding user data
  localStorage.setItem("New Todo" , JSON.stringify(listArr)); // Transforming Js object into a json string

  showTask(); // Calling the function to add a new task
  }

  
});


//A NEW TASK ADD

function showTask(){
  let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
  if(getLocalStorage == null){   //if localstorage is null
    listArr = [];  //creating a blank array
    }    
    else{
    listArr = JSON.parse(getLocalStorage); // Transforming json string into a js object
    }

    let newDiv = "";
    listArr.forEach((element , index) => {
      newDiv += ` <div class="content">
         <li id="cont"> ${element} </li>
            <button class="delete" onclick = "deleteTask(${index})"; >Delete</button> 
         </div>
            `
          
    });

    task.innerHTML =  newDiv;// Adding a new task
    input.value = ""; // Once a new task is added 
}


// DELETE THE TASK ;

function deleteTask(index){
  let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
  listArr = JSON.parse(getLocalStorage); // Transforming json string into a js object

  listArr.splice(index , 1); //Delete or remove that particular indexed div
  localStorage.setItem("New Todo" , JSON.stringify(listArr));
  showTask();

}
