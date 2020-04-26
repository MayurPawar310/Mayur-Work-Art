

//Get the input Element
var userField = document.querySelector('#username');
var emailField = document.querySelector('#email');
var passwordField = document.querySelector('#massage');


//Get the Validateion Message Element
var userError = document.querySelector('#name_error');
var emaiError = document.querySelector('#email_error');
var passwordError = document.querySelector('#massage_error');

//Add blur Element Handling
userField.addEventListener('blur',verifyUser);
emailField.addEventListener('blur',verifyEmail);
passwordField.addEventListener('blur',verifyMassage);





function validate() {
    var isValid = true;

    //Required User name Validate
    if(userField.value === ''){
        displayErrorMessage(userField,userError,'User Name Required');
        isValid = false;
        return isValid;

    }

    //User Name Validate
    if(userField.value.length <=4){
        displayErrorMessage(userField,userError,'Enter Atleast 5 Letters');
        isValid = false;
        return isValid;
    }

    // User Name Pattern Validate
    if(!userField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        displayErrorMessage(userField,userError,'Pattern Not Match');
        isValid = false;
        return isValid;
    }

    //Required Email Validate
    if(emailField.value === ''){
        displayErrorMessage(emailField,emaiError,'Email Required');
        isValid = false;
        return isValid;
    }

    //Required Password Validate
    if (passwordField.value === ''){
        displayErrorMessage(passwordField,passwordError,'Password Required');
        isValid = false;
        return isValid;
    }

    //Required Confirm Password Validate
    if(confirmPasswordField.value === ''){
        displayErrorMessage(confirmPasswordField,passwordError,'confirm Passwor Requied');
        isValid = false;
        return isValid;
    }

    // Password Match Validation
    if(passwordField.value !== confirmPasswordField.value){
        displayErrorMessage(passwordField,passwordError,'Passwords Not Matched');
        confirmPasswordField.style.borderColor = 'red';
        confirmPasswordField.style.backgroundColor = 'lightsalmon';
        isValid = false;
        return isValid;
    }

    if(isValid === false){
        return isValid;
    }
    else {
        alert('From Submitted');
        return true;
    }

}

function displayErrorMessage(inputField,errorField,message) {
    inputField.style.borderColor = 'red';
    inputField.style.backgroundColor = 'lightsalmon';
    errorField.textContent = message;
    errorField.style.color = 'red';
}

function verifyUser() {
    userField.style.borderColor = 'grey';
    userField.style.backgroundColor = 'white';
    userError.textContent = '';
}

function verifyEmail() {
    emailField.style.borderColor = 'grey';
    emailField.style.backgroundColor = 'white';
    emaiError.textContent = '';
}

function verifyPassword() {
    passwordField.style.borderColor = 'grey';
    passwordField.style.backgroundColor = 'white';
    confirmPasswordField.style.borderColor = 'grey';
    confirmPasswordField.style.backgroundColor = 'white';
    passwordError.textContent = '';
}

function verifyPassword() {
    confirmPasswordField.style.borderColor = 'grey';
    confirmPasswordField.style.backgroundColor = 'white';
    passwordField.style.borderColor = 'grey';
    passwordField.style.backgroundColor = 'white';
    passwordError.textContent = '';
}