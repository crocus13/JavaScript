var u_name = document.myform.u_name;
var u_pass = document.myform.u_pass;

var userName = "john";
var passWord = "123";

function runMe()
{
    if(u_name.value == userName && u_pass.value == passWord)
    {
        console.log("login success");
    
    }
    else{
        console.log("login fail");
    }
    
}
