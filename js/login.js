var emailInputLogin = document.getElementById("emailInputLogin");
var passwordInputLogin = document.getElementById("passwordInputLogin");
var invalidInputLogin = document.getElementById("invalidInputLogin");

function login() 
{
    if (emailInputLogin.value == "" || passwordInputLogin.value == "" ) 
    {
        document.getElementById("invalidInputLogin").innerHTML = "All inputs is required";
    }
    else 
    {
        var x = JSON.parse(localStorage.getItem('userSignupData'));
        var welcomeUserName;
        for (var i = 0; i < x.length; i++)
        {
            if (emailInputLogin.value.toLowerCase() == x[i].userEmail.toLowerCase() && passwordInputLogin.value.toLowerCase() == x[i].userPassword.toLowerCase())
            {
                welcomeUserName = x[i].userName;
            }
            else
            {
                document.getElementById("invalidInputLogin").innerHTML = "incorrect email or password";
            }
        }
        localStorage.setItem('Name', JSON.stringify(welcomeUserName));
        goToHomePage();
    }
}

function goToHomePage()
{
    window.open('welcomepage.html', "_self");
}



