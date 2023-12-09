

// A function that increments the value in likes_count by 1
function increment(element){
   console.log(element);
  var idbuttoncliked=element.id;
 console.log(idbuttoncliked);
 if(idbuttoncliked==btnlikes1){
    likes_count1 = document.querySelector("#likes_count1");
    console.log(likes_count1);
  /*  */
  likes_count1.innerText++;

 }
 else if (idbuttoncliked==btnlikes2){
    likes_count2 = document.querySelector("#likes_count2");
    console.log(likes_count2);
    /**/
    likes_count2.innerText++;
 }else{
    likes_count3 = document.querySelector("#likes_count3");
   /*  */
   console.log(likes_count3);
   likes_count3.innerText++;
 }
    
    
}