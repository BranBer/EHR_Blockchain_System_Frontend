logout = document.getElementById('logout_button').addEventListener('click', logout);

function logout()
{
    localStorage.setItem('Token', null);
    console.log("Successfully Logged Out");
}