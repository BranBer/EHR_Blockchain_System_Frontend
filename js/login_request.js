
document.getElementById('login_submit').addEventListener('click', login)

function login()
{
    var url = 'https://cors-anywhere.herokuapp.com/https://www.electronichealthchain.net/login/';
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let loginStatus = document.getElementById('login_status');

    let body = {
        'username': username,
        'password': password
    }

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Allow-Type', 'POST, OPTIONS');

    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            loginStatus.innerText = "Successfuly Logged In";
            loginStatus.style.color = '#00ffa9';

            localStorage.setItem('Token', this.responseText);
            console.log(localStorage.getItem('Token'))
        }
        else if(this.readyState == 4 && this.status == 400)
        {
            loginStatus.innerText = "Invalid Credentials";
            loginStatus.style.color = 'red';
        }

        loginStatus.style.fontFamily = 'Lucida Console';
        loginStatus.style.fontSize = '20px';
    }

    xhr.send(JSON.stringify(body));
}