let pattern = /[a-z\d]+#/g

let username = prompt("enter your username")

let matchelement= username.match(pattern)

if (matchelement){
    alert("valid username")
}

else{
    alert("invalid username")
}