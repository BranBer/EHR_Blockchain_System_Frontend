var selected;

//Must load the last window that was previously loaded
load_this = localStorage.getItem("index_last_nav_viewed");
selected = document.getElementById(load_this);
selected.style.visibility = "visible";

function display_login()
{
    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("login");
    selected.style.visibility = "visible";
    console.log("enabled login window");

    localStorage.setItem("index_last_nav_viewed", "login")
}

function display_home()
{
    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("home");
    selected.style.visibility = "visible";
    console.log("enabled home window");

    localStorage.setItem("index_last_nav_viewed", "home")
}

function display_about_us()
{
    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("about_us");
    selected.style.visibility = "visible";
    console.log("enabled about_us window");

    localStorage.setItem("index_last_nav_viewed", "about_us")
}

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

    localStorage.setItem("index_last_nav_viewed", "register")
}

function display_records()
{
    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("records");
    selected.style.visibility = "visible";
    console.log("enabled records window");

    localStorage.setItem("index_last_nav_viewed", "records")
}