function login(ev) {
  //alert("test")
  ev.preventDefault();
  email = document.getElementById("email_field").value;
  password = document.getElementById("password_field").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Logged in!");
      window.location.href = "https://socialise.netlify.app/view-se";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", login);
});
