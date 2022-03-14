let data = [];
const addData = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  const submissionForm = document.querySelector("submission-form");
  capturedTitle = document.getElementById("title").value;
  capturedBody = document.getElementById("body").value;
  capturedBS = document.getElementById("Business Strategy").checked;
  capturedOM = document.getElementById("Operations Management").checked;
  capturedIT = document.getElementById("IT/Digital Solutions").checked;
  capturedBM = document.getElementById("Branding and Marketing").checked;
  capturedF = document.getElementById("Finance").checked;
  capturedET = document.getElementsByName("engagement type");
  if (capturedTitle == "" || capturedBody == "") {
    alert("Remember to fill in all fields!");
  } else {
    db.collection("problem-form")
      .doc()
      .set({
        id: Date.now(),
        title: capturedTitle,
        body: capturedBody,
        BS: capturedBS,
        OM: capturedOM,
        IT: capturedIT,
        BM: capturedBM,
        F: capturedF,
        ET: getRadioValue(),
      })
      .then(() => {
        alert("submission received!");
      });
    localStorage.setItem("SEproblem", JSON.stringify(data));
  }
};

function getRadioValue() {
  for (i = 0; i < capturedET.length; i++) {
    if (capturedET[i].checked) return capturedET[i].value;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addData);
});
