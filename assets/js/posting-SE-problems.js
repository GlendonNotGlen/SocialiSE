let data = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addData = (ev)=>{
    
    ev.preventDefault();  //to stop the form submitting
    capturedTitle = document.getElementById('title').value;
    capturedBody = document.getElementById('body').value;
    capturedAAH = document.getElementById('Agriculture and Animal Husbandry').checked;
    capturedAC = document.getElementById('Arts and Cultre').checked;
    capturedBW = document.getElementById('Beauty and Wellness').checked;
    capturedBC = document.getElementById('Business Consultancy').checked;
    capturedCRE = document.getElementById('Construction and Real Estate').checked;
    if (capturedTitle == "" || capturedBody == ""){
        alert("Remember to fill in all fields!")
    } else {
    let info = {
        id: Date.now(),
        title: capturedTitle,
        body: capturedBody,
        AAH: capturedAAH,
        AC: capturedAC,
        BW:capturedBW,
        BC:capturedBC,
        CRE:capturedCRE
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
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addData);
});