available_users = undefined;
patients_avail_style = undefined;
patient_selected = undefined;
patients = [];

function display_auth_patients()
{
    let patients_avail = document.getElementById('records_nav');
    patients_avail.innerHTML = '';
    
    unselected_style = "height: 40px;" +
    "width: 160px;" +
    "border: none;" +
    "outline: none;" +
    "display: inline-block;" +
    "background-color: #00ffa9;" +
    "border-left-color: white;"  +
    "border-left-style: solid;" +
    "border-left-width: 3px;";



    let patients_list = '';
    console.log(patients_avail_style);

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.electronichealthchain.net/api/patients/auth/', true);
    xhr.withCredentials = false;

    token = 'Token ' + JSON.parse(localStorage.getItem('Token'))['token'];
    
    xhr.setRequestHeader('Allow', 'GET, OPTIONS');
    xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', token);

    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            available_users = JSON.parse(this.responseText);

            //From here, set the list items to the users that are available

            for(var i in available_users){
                id = available_users[i]['id']
                full_name = available_users[i]['first_name'] + ' ' + available_users[i]['last_name'];
                full_name_id = full_name + ': ' + id;

                console.log(id);
                console.log(full_name);

                //Make a button for each user
                patients_list = '<li class = "patient"><button class = "patient_select" id = "patient' + i +  '" onclick = "switch_patient('+ i +')" >' + full_name_id + '</button></li>';
                patients_avail.innerHTML += patients_list;                
            }
        }
    }

    //Get Patient Buttons
    patients = document.getElementsByClassName('patient_select');

    // for(var i in patients)
    // {
    //     patients[i].addEventListener("click", function(){
    //         switch_patient(i);
    //     });
    // }

    xhr.send();
}

function switch_patient(num)
{
    if(patient_selected != undefined)
    {
        console.log('Deselected ' + patient_selected.id);

        //Revert to Deselcted Style
        patient_selected.style.backgroundColor = '#00ffa9';
        patient_selected.style.border = 'none';
        patient_selected.style.borderRightStyle = 'solid';
        patient_selected.style.borderRightWidth = '3px';
        patient_selected.style.borderRightColor = 'white';

        patient_selected = patients[num];
        //Change Selected Style
        patients[num].style.backgroundColor = '#f6cff2';
        patients[num].style.borderStyle = 'solid';
        patients[num].style.borderWidth = '3px';
        patients[num].style.borderColor = 'white';

        console.log('Selected ' + patient_selected.id);
    }
    else if (patient_selected == undefined)
    {
        //patients[num].style.csstext = selected_style;
        patients[num].style.backgroundColor = '#f6cff2';
        patients[num].style.borderStyle = 'solid';
        patients[num].style.borderWidth = '3px';
        patients[num].style.borderColor = 'white';
        
        patient_selected = patients[num];
        console.log('Selected ' + patient_selected.id);
    }
}

function display_records()
{
    display_auth_patients();

    if(selected != null)
    {
        selected.style.visibility = "hidden";
        console.log("disabled previous window");
    }
    selected = document.getElementById("records");
    selected.style.visibility = "visible";
    console.log("enabled records window");

    localStorage.setItem("index_last_nav_viewed", "records");
}

//Must be able to change the focus
