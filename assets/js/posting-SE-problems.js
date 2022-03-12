let data = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addData = (ev)=>{
    
    ev.preventDefault();  //to stop the form submitting
    capturedTitle = document.getElementById('title').value;
    capturedBody = document.getElementById('body').value;
    capturedBS = document.getElementById('Business Strategy').checked;
    capturedOM = document.getElementById('Operations Management').checked;
    capturedIT = document.getElementById('IT/Digital Solutions').checked;
    capturedBM = document.getElementById('Branding and Marketing').checked;
    capturedF = document.getElementById('Finance').checked;
    capturedET = document.getElementsByName('engagement type');
    if (capturedTitle == "" || capturedBody == ""){
        alert("Remember to fill in all fields!")
    } else {
    let info = {
        id: Date.now(),
        title: capturedTitle,
        body: capturedBody,
        BS: capturedBS,
        OM: capturedOM,
        IT: capturedIT,
        BM: capturedBM,
        F : capturedF,
        ET: getRadioValue()
    }
    data.push(info);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();
    //for display purposes only
    // console.warn('added' , {data} );
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(data, '\t', 2);
    //saving to localStorage
    localStorage.setItem('SEproblem', JSON.stringify(data) );
    // document.getElementById('title').reset();
    // document.getElementById('body').reset();
    // document.getElementById('tags').reset();
    }
}

function getRadioValue() {
            for(i = 0; i < capturedET.length; i++) {
                if(capturedET[i].checked)
                    return capturedET[i].value
            }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addData);
});