var todoDisplay=document.getElementById("todoDisplay");
var userDisplay=document.getElementById("userDisplay");
var loginDisplay=document.getElementById("loginDisplay");

var todo=document.getElementById("todo");
var user=document.getElementById("user");
var login=document.getElementById("login");

userDisplay.style.display="none";
loginDisplay.style.display="none";

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

var todoInput=document.getElementById("todoInput");
var addBtn=document.getElementById("addBtn");
var todoListTable=document.getElementById("todoListTable");
var todoList=[];

var addTodo=()=>{
    var data=todoInput.value;
    todoList.push(data);
    todoInput.value="";
    updateTodoList();
}
addBtn.addEventListener("click",addTodo);

var updateTodoList=()=>{
    var dispTodoList="";
    todoList.forEach((todo,i)=>{
        dispTodoList+=`
        <tr>
        <td>${i+1}.</td>
        <td>${todo}</td>
        <td><input type="image" src="images/edit.png" alt="Submit" onClick="updateTodo(${i})" width="20"></td>
        <td><input type="image" src="images/delete.png" alt="Submit" onClick="deleteTodo(${i})" width="20"></td>
        </tr>
        `;
    })
    todoListTable.innerHTML=dispTodoList;
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
