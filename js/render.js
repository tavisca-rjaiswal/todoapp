var todoDisplay=document.getElementById("todoDisplay");
var userDisplay=document.getElementById("userDisplay");
var loginDisplay=document.getElementById("loginDisplay");

var todo=document.getElementById("todo");
var user=document.getElementById("user");
var login=document.getElementById("login");

var todoInput=document.getElementById("todoInput");
var addBtn=document.getElementById("addBtn");
var todoListTable=document.getElementById("todoListTable");

(()=>{
    userDisplay.style.display="none";
    loginDisplay.style.display="none";
})();

var DispTodo = () =>
{
    todoDisplay.style.display="block";
    userDisplay.style.display="none";
    loginDisplay.style.display="none";
}
var DispUser = () => 
{
    todoDisplay.style.display="none";
    userDisplay.style.display="block";
    loginDisplay.style.display="none";
}
var DispLogin = () =>
{
    todoDisplay.style.display="none";
    userDisplay.style.display="none";
    loginDisplay.style.display="block";
}

todo.addEventListener("click",DispTodo);
user.addEventListener("click",DispUser);
login.addEventListener("click",DispLogin);

var todoList=[];

var addTodo=()=>{
    var data=todoInput.value;
    todoList=[...todoList,data];
    todoInput.value="";
    updateTodoList();
}
addBtn.addEventListener("click",addTodo);

var updateTodoList=()=>{
    var dispTodoList="";
    if(todoList.length>0)
    {
        dispTodoList=createList(dispTodoList,todoList.length);
    }
    todoListTable.innerHTML=dispTodoList;
}

function createList(dispTodoList,i)
{
    if(i==1)
    {
        return `
        <div class="todoListTable1">
            <div>${i}. </div>
            <div>${todoList[i-1]}</div>
            <div><input type="image" src="images/edit.png" alt="Submit" onClick="updateTodo(${i-1})" width="20"></div>
            <div><input type="image" src="images/delete.png" alt="Submit" onClick="deleteTodo(${i-1})" width="20"></div>
        </div>
        `;        
    }
    else
    {
        dispTodoList=createList(dispTodoList,i-1);
        dispTodoList+=`
        <div class="todoListTable1">
            <div>${i}. </div>
            <div>${todoList[i-1]}</div>
            <div><input type="image" src="images/edit.png" alt="Submit" onClick="updateTodo(${i-1})" width="20"></div>
            <div><input type="image" src="images/delete.png" alt="Submit" onClick="deleteTodo(${i-1})" width="20"></div>
        </div>
        `;
        return dispTodoList;
    }
    return dispTodoList;
}

var deleteTodo=(i)=>{
    todoList.splice(i,1);
    updateTodoList();
}
var updateTodo=(i)=>{
    var newValue=prompt("Update the Todo",todoList[i]);
    todoList.splice(i,1,newValue);
    updateTodoList();
}

function fetchAll()
{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => todoList=json.map((item)=>item["title"]))
    .then(setTimeout(()=>{updateTodoList();document.getElementById("lds-dual-ring").style.display="none"},2000))
}
fetchAll();
