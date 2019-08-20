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
