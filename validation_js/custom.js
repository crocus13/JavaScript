var u_name = document.myform.u_name;
var errorMsg = document.getElementById("errorMsg");

function runMe(){
    if (u_name.value.length < 3)
    {
        errorMsg.innerHTML = "needs more characters";
        errorMsg.style.color = "red";
        // errorMsg.style.fontStyle = "italic";

    }
    else if(u_name.value.length == 6)
    {
        errorMsg.innerHTML = "ok,proceed";
        errorMsg.style.color = "green";

    }
    else if (u_name.value.length > 6)
    {
        errorMsg.innerHTML = "limit exceeded";
        errorMsg.style.color = "blue";


    }
}
// var myVideo = document.getElementById("myVideo");
// myVideo.play();
// function playVideo()
// {
//     document.getElementById("myVideo").play();
// }