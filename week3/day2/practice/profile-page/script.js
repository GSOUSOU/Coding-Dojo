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



// removing from connection requests by clicking to the check or x button

var spans = [
    document.querySelector(".card-list-item0"),
    document.querySelector(".card-list-item1"),
   
];

function removeRequest(id) {
    spans[id].remove();
  }

