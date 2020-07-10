logout = document.getElementById('logout_button').addEventListener('click', logout);

function logout()
{
    localStorage.setItem('Token', null);
    localStorage.setItem('Username', null);
    console.log("Successfully Logged Out");

    //Enable the Login Button
    loginButton = document.getElementById("login_button");
    loginButton.style.display = "block";

    //Wipe Username Label
    accountLabel = document.getElementById("account_label");
    accountLabel.innerText = "Account";

    display_login();

    //clear username and password inputs for login section
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';

    //Clear the login status message
    let loginStatus = document.getElementById('login_status');
    loginStatus.innerText = "";
}