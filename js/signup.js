var nameInputSignup = document.getElementById("nameInputSignup");
var emailInputSignup = document.getElementById("emailInputSignup");
var passwordInputSignup = document.getElementById("passwordInputSignup");
var invalidInputSignup = document.getElementById("invalidInputSignup");
var signupArr;

if(localStorage.getItem("userSignupData") == null)
{
    signupArr = [];
}
else
{
    signupArr = JSON.parse(localStorage.getItem("userSignupData"));
}

function isEmailExist() 
{
    for (var i = 0; i < signupArr.length; i++)
    {
        if (signupArr[i].userEmail.toLowerCase() == emailInputSignup.value.toLowerCase()) 
        {
            return false;
        }
    }
}

function signUp() 
{
    if (nameInputSignup.value == "" || emailInputSignup.value == "" || passwordInputSignup.value == "") 
    {
        document.getElementById("invalidInputSignup").innerHTML = "All inputs is required";
    }
    else
    {
        signupObj = {
            userName: nameInputSignup.value,
            userEmail: emailInputSignup.value,
            userPassword: passwordInputSignup.value
        }
        if (isEmailExist() == false) 
        {
            invalidInputSignup.classList.replace('text-success' , 'text-danger');
            document.getElementById("invalidInputSignup").innerHTML = "Email already exists";
        } 
        else
        {
            signupArr.push(signupObj);
            localStorage.setItem('userSignupData', JSON.stringify(signupArr));
    
            invalidInputSignup.classList.replace('text-danger', 'text-success');
            document.getElementById("invalidInputSignup").innerHTML = "Success";
        }
    }
}