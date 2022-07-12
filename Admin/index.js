function validate(e) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username=="neeraj123" && password=="neeraj") {
    alert("Login Complete Successful Authentication");
    location.replace("http://127.0.0.1:8080");
  }
  else{
    alert("Incorrect Creditionals");
  }
  e.preventDefault();
}
