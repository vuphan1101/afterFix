const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

function signup() {
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    if (validate_email(email) == false) {
      alert('Invalid Email Format');
      return;
    }
  
    if (password != confirmPassword) {
      alert('Passwords do not match');
      return;
    }
}

function login() {
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  if (validate_email(email) == false) {
    alert('Invalid Email Format');
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
   .then((userCredential) => {
      var user = userCredential.user;
      console.log('User logged in:', user);
      // Add code here to redirect the user to the appropriate page
    })
   .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorMessage);
      // Handle error
    });
}
