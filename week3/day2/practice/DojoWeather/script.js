console.log("page loading...");

var cookieDiv = document.querySelector(".cookie");

function popup(){
    alert(" Loading weather report ......");
}

function msgremove(){
    cookieDiv.remove();
}

/***T°C = (T°F - 32) x (5/9)
soit T°F = T°C x 9/5 + 32 = T°C x 1,8 + 32* */
function conversiontoF(temp) {
    return Math.round(temp* 9 / 5  + 32);
}
function conversiontoC(temp) {
    return Math.round((temp - 32)*5/9);
}
function changetemperature(element){
    for(i=1; i<9;i++){
        var tempid=document.querySelector("#temp" + i);
        /*console.log(tempid);*/
        var tempVal = parseInt(tempid.innerText);
        if(element.value == "°C") {
            tempid.innerText = conversiontoC(tempVal);
        } else {
            tempid.innerText = conversiontoF(tempVal);
        }
    }
}
