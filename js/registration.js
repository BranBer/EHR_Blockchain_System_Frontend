var body = null;

function display_register()
{
    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("register");
    selected.style.visibility = "visible";
    console.log("enabled register window");

    localStorage.setItem("index_last_nav_viewed", "register");
}

function display_register_authcode()
{
    body = {};
    register_complete = true;
    entry_count = 0;
    password2 = '';

    status = '';

    entries = document.getElementsByClassName("register_input");

    for(var i in entries)
    {
        if(entries[i].id == "register_username")
        {
            body['username'] = entries[i].value;
            if(body['username'] == "")
            {
                //enable username required message
                register_complete = false;
                console.log("Username Required...");
            }
        }

        if(entries[i].id == "register_email")
        {
            body['email'] = entries[i].value;
            if(body['email'] == "")
            {
                //enable email required message
                register_complete = false;
                console.log("Email Required...");
            }
        }

        if(entries[i].id == "register_password")
        {
            body['password'] = entries[i].value;
            if(body['password'] == "")
            {
                //enable password required message
                register_complete = false;
                console.log("Password Required...");
            }
        }

        if(entries[i].id == "register_password2")
        {
            password2 = entries[i].value;
            if(password2 == "")
            {
                //enable password2 required message
                register_complete = false;
                console.log("Password 2 Required...");
            }
        }

        if(entries[i].id == "register_first_name")
        {
            body['first_name'] = entries[i].value;
            if(body['first_name'] == "")
            {
                //enable first_name required message
                register_complete = false;
                console.log("First Name Required...");
            }
        }

        if(entries[i].id == "register_last_name")
        {
            body['last_name'] = entries[i].value;
            if(body['last_name'] == "")
            {
                //enable last_name required message
                register_complete = false;
                console.log("Last Name Required...");
            }
        }

        if(entries[i].id == "register_dob")
        {
            body['date_of_birth'] = entries[i].value;
            if(body['date_of_birth'] == "")
            {
                //enable dob required message
                register_complete = false;
                console.log("Date of birth Required...");
            }
        }

        if(entries[i].id == "register_doc")
        {
            body['verification'] = entries[i].value;
            if(body['verification'] == "")
            {
                //enable verification required message
                console.log("Verification Required...");
            }
        }
    }

    //Check if password and password2 match
    if(body['password'] != password2)
    {
        register_complete = false;
        status = 'Passwords do not match...';
    }
    else
    {
        status = 'Registration Incomplete...';
    }

    if(register_complete == true)
    {
        send_auth_code();

        if(selected != null)
        {
            selected.style.visibility = "hidden";
            console.log("disabled previous window");
        }
        selected = document.getElementById("register_authcode");
        selected.style.visibility = "visible";
        console.log("enabled register authcode window");

        localStorage.setItem("index_last_nav_viewed", "register_authcode"); 
    }
    else
    {
        //enable registration incomplete message
        console.log("Registration Incomplete...");

        //display registration incomplete message
        status_msg = document.getElementById("register_status");
        status_msg.style.display = "block";
        status_msg.innerText = status;
    } 
}

function send_auth_code()
{
    //Check Auth Code
    let verify_auth_url = 'https://cors-anywhere.herokuapp.com/https://www.electronichealthchain.net/authregister/';
    console.log("im here");
    let xhr_ver = new XMLHttpRequest();

    xhr_ver.open('POST', verify_auth_url, true);
    xhr_ver.setRequestHeader('Content-Type', 'application/json');
    xhr_ver.setRequestHeader('Allow', 'POST, OPTIONS');

    xhr_ver.onreadystatechange = function(){
        if(this.readyState == 4 && status == 200)
        {
            console.log("Code sent to " + body['email']);
        }
    }

    xhr_ver.send(
        JSON.stringify(
        {
            'email': body['email']
        })
    );
}

function register_account()
{
    console.log("Registering account...");
    authcode = document.getElementById('register_code').value;
    body['authcode'] = authcode;

    s = undefined;

    console.log(body['authcode']);    

    if(authcode != '')
    {
        let url = 'https://cors-anywhere.herokuapp.com/https://www.electronichealthchain.net/register/';
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Allow', 'POST, OPTIONS');

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200)
            {
                console.log(this.responseText);

                s = this.status;
            }
        }

        xhr.send(JSON.stringify(body));

        //display_login();
    }
    else
    {
        console.log("Must enter an auth code...");
    }
}