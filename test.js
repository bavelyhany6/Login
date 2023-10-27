var usersContainer = [];

var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var loginBtn = document.getElementById("loginBtn");

var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signupBtn");

if (localStorage.getItem('users') != null) {
    usersContainer = JSON.parse(localStorage.getItem('users'));
}

// function loginUser() {
//     var oldUser = {
//         email: emailInput.value,
//         password: passwordInput.value,
//     };
    
//     // Check if the email already exists in usersContainer
//     var existingUser = usersContainer.find(user => user.email === oldUser.email);
    
//     if (existingUser) {       
//          window.location.href = 'success.html';
//         }
//         else{
//      alert("Email is not exists!");

//         }
//     // usersContainer.push(oldUser);
//         // localStorage.setItem('users', JSON.stringify(usersContainer));
//         // clearForm()
  
// }
function loginUser() {
    var inputEmail = emailInput.value;
    var inputPassword = passwordInput.value;

    // Validate email format
    if (!validateEmail(inputEmail)) {
        alert("Invalid email format");
        return;
    }

    // Validate password length
    if (!validatePassword(inputPassword)) {
        alert("Password must be at least 8 characters long");
        return;
    }

    // Find user by email and password
    var existingUser = usersContainer.find(user => user.email === inputEmail && user.password === inputPassword);

    if (existingUser) {
        // Navigate to the success page
        window.location.href = 'success.html';
    } else {
        alert("Invalid email or password");
    }
}

function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}
// function signUser() {
//     var newUser = {
//         name: signupName.value,
//         email: signupEmail.value,
//         password: signupPassword.value
//     };
    
//     // Check if the email already exists in usersContainer
//     var existingUser = usersContainer.find(user => user.email === newUser.email);
    
//     if (existingUser) {
//         // Handle the case where the email already exists
//         alert("Email already exists!");
//         return; // Exit the function without adding the user
//     }
    
//     usersContainer.push(newUser);
//     localStorage.setItem('users', JSON.stringify(usersContainer));
//     clearForm()
// }
// ... Your existing code ...

function signUser() {
    var newName = signupName.value;
    var newEmail = signupEmail.value;
    var newPassword = signupPassword.value;

    // Validate name
    if (!validateName(newName)) {
        alert("Name is required");
        return;
    }

    // Validate email format
    if (!validateEmail(newEmail)) {
        alert("Invalid email format");
        return;
    }

    // Validate password length
    if (!validatePassword(newPassword)) {
        alert("Password must be at least 8 characters long");
        return;
    }

    // Check if the email already exists in usersContainer
    var existingUser = usersContainer.find(user => user.email === newEmail);

    if (existingUser) {
        // Handle the case where the email already exists
        alert("Email already exists!");
        return; // Exit the function without adding the user
    }

    var newUser = {
        name: newName,
        email: newEmail,
        password: newPassword
    };

    usersContainer.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersContainer));
    clearForm();
}

function validateName(name) {
    return name.trim() !== "";
}

// ... The rest of your code ...


function clearForm() {
    // emailInput.value = "";
    // passwordInput.value = "";
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
}
// ... Your existing code ...



// ... The rest of your code ...

