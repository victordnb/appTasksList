
const input = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const error = document.querySelector(".error");
const pendingTask = document.querySelector("span");

function rescueTaskList(){
    const storedTasks = localStorage.getItem("tasks");
    if(storedTasks){
        return storedTasks.split(",");
    }else{
        return [];
    }
}

/*function addItem(title) {
    const item = document.createElement("li");
    item.innerText = title;
    list.append(item);
}*/

function addItem(title) {
    const item = document.createElement("li");
    item.innerText = title;
    list.append(item);
  }


function clearInput(){
    input.value = "";
    input.focus(); 
}

function setError(){
    setError.innerText = message;
}

function clearError(){
    setError.innerText = "";
}

function savetaks(title){
    tasks.push(title);
    localStorage.setItem("tasks", tasks);
}

function updatePendingTasks(){
    pendingTask.innerText = tasks.length;
}

function removeItem(item){
  //  list.remove();
    list.removeChild(item);
    const items = document.querySelectorAll("li");
    const newTasks = [];
    items.forEach((item) => newTasks.push(item.innerText));
    tasks = newTasks;
    localStorage.setItem("tasks", tasks)
}


let tasks = rescueTaskList();
tasks.forEach(addItem);
updatePendingTasks();

form.addEventListener("submit", (event) => {
    event.preventDefault(); //esto no deja que el form haga su funcion de recargar la pagina
    if(input.value){

        addItem(input.value);
        savetaks(input.value);
        clearInput();
        clearError();
        updatePendingTasks();
    }else{
        setError("this field mustn't be empty");
    }
});

list.addEventListener("click", (event)=>{
    removeItem(event.target);
    updatePendingTasks();
});
;

