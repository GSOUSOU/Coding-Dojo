console.log("page loaded...");
// getting the  username 
var username=document.querySelector("#username");
// getting the  username's image 
var userimg = document.querySelector(".card-header >img");
// clicking the edit btn will chande the user name and its image
function editProfile(){
    username.innerText = "Todd E";
    userimg.src = "images/todd-s.jpg" ;  
}

var requestspan=document.querySelector("#request");
var connectionspan=document.querySelector("#connection");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestspan.innerText--;
    connectionspan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestspan.innerText--;
}

