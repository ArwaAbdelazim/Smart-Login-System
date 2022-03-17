function logout()
{
    window.open('login.html',"_self");
}
var y = JSON.parse(localStorage.getItem('Name'));
document.getElementById("welcomTag").innerHTML = "Welcome " + y;

function preventBack()
{
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload=function(){null};