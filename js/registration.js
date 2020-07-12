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

    entries = document.getElementsByClassName("register_input");

    for(var i in entries)
    {
        console.log(entries[i].value)
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
            body['password2'] = entries[i].value;
            if(body['password2'] == "")
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

    if(register_complete == true)
    {
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
    } 
}

function register_account()
{
    //Check Auth Code
    let verify_auth_url = 'https://cors-anywhere.herokuapp.com/https://www.electronichealthchain.net/authregister/';
    let register_url = 'https://cors-anywhere.herokuapp.com/https://www.electronichealthchain.net/register/';

    let xhr_ver = new XMLHttpRequest();
    xhr_ver.open('POST', verify_auth_url, true);

    xhr_ver.onreadystatechange = function(){
        if(this.readyState == 4 && status == 200)
        {
            //If this is successful, send a request to the url that creates the account
            let xhr_reg = new XMLHttpRequest();
            xhr_reg.open('POST', register_url, true);
            console.log("Code Verified Account!");


            xhr_reg.onreadystatechange = function()
            {
                if(this.readyState == 4 && status == 200)
                {
                    console.log("Created Account!")
                }
            }
            xhr_reg.send(body)
        }
    }

    xhr_ver.send()
}