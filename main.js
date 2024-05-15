
// let pattern = /[A-Za-z\d]/g

// let username = prompt("enter your username")

// let matchedlement = username.match(pattern)

// if(matchedlement){
//     alert("Login Successful")
// }
// else{
//     alert("Not a correct format");
// }


// function total(){
//     let totalprice = document.getElementById("price")*x
//     document.getElementById("totalvalue").innerHTML=totalprice
// }
// let i =0 ;
// function addvalue(){    
//      i++
//      var x= document.getElementById("value").innerHTML = i
// }
// function valuedecrease(){
//      if( i>=1){
//         i--
//          var x=document.getElementById("value").innerHTML = i
//     }
//     else{
//         var x=document.getElementById("value").innerHTML = 0
//     }
// }
// console.log(x);



document.getElementById("btn").addEventListener('click',()=>{
      
let patternUser = /(?=.*[A-Za-z]){1,15}/g


let usernamematch = document.getElementById("form3Example1c").value.match(patternUser)

if(usernamematch){
    window.location.href = "dashboard.html"
}
else{
    document.getElementById("usernamemsg").innerHTML="the username is incorrect"
    document.getElementById("form3Example1c").style.backgroundColor="red"
    document.getElementById("form3Example1c").style.color="white"

}
})


