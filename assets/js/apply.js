let data = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addData = (ev)=>{
    
    ev.preventDefault();  //to stop the form submitting
    capturedfirstname = document.getElementById('firstname').value;
    capturedlastname = document.getElementById('lastname').value;
    capturedcompanyname = document.getElementById('companyname').value;
    capturedphonenumber = document.getElementById('phonenumber').value;
    capturedcompanyemail = document.getElementById('companyemail').value;
    capturedwebsite = document.getElementById('website').value;
    captured1 = document.getElementById('Agriculture and Animal Husbandry').checked;
    captured2 = document.getElementById('Arts and Cultre').checked;
    captured3 = document.getElementById('Beauty and Wellness').checked;
    captured4 = document.getElementById('Business Consultancy').checked;
    captured5 = document.getElementById('Construction and Real Estate').checked;
    captured6 = document.getElementsById('Others').checked;
    capturedothers = document.getElementById('other_expertise').value;
    if (capturedfirstname == ""|| capturedwebsite == "" || capturedphonenumber == "" || capturedcompanyname == "" || capturedlastname == "" || capturedcompanyemail == ""){
        alert("Remember to fill in all fields!")
    } else {
    let info = {
        id: Date.now(),
        fn: capturedfirstname,
        ln: capturedlastname,
        cn: capturedcompanyname,
        ce: capturedcompanyemail,
        wb: capturedwebsite,
        AA: captured1,
        AC : captured2,
        BW : captured3,
        BC : captured4,
        CR : captured5,
        O : captured6,
        others : capturedothers,
    }
    data.push(info);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();
    //for display purposes only
    // console.warn('added' , {data} );
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(data, '\t', 2);
    //saving to localStorage
    localStorage.setItem('application', JSON.stringify(data) );
    // document.getElementById('title').reset();
    // document.getElementById('body').reset();
    // document.getElementById('tags').reset();
    }
}

// function getRadioValue() {
//             for(i = 0; i < capturedET.length; i++) {
//                 if(capturedET[i].checked)
//                     return capturedET[i].value
//             }
// }

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('applybtn').addEventListener('submit', addData);
});