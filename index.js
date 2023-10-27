var usersContainer=[];

var emailInput=document.getElementById("emailInput")
var passwordInput=document.getElementById("passwordInput")
var loginBtn=document.getElementById("loginBtn")



if(localStorage.getItem('users') !=null){
    usersContainer=JSON.parse(localStorage.getItem('users'))
}

function addUser(){
if ()
    var newUser= {
       email: emailInput.value,
        password:passwordInput.value,
    };

    var existingUser = usersContainer.find(user => user.email === newUser.email);

    if (existingUser) {
        // Handle the case where the email already exists
       alert("Email already exists!");
        return; // Exit the function without adding the user
    }

    usersContainer.push(newUser);
    localStorage.setItem("users",JSON.stringify(usersContainer));
    clearForm()
}


function clearForm(){
    emailInput.value= "";
    passwordInput.value= "";
}