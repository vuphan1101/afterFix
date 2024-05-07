const firebaseConfig = {
    apiKey: "AIzaSyD--Vx3ryiLv4xd0v6vpdouZ-hfR2mX39M",
    authDomain: "contact-form-fced8.firebaseapp.com",
    databaseURL: "https://contact-form-fced8-default-rtdb.firebaseio.com",
    projectId: "contact-form-fced8",
    storageBucket: "contact-form-fced8.appspot.com",
    messagingSenderId: "560025851314",
    appId: "1:560025851314:web:0537b144fd0143685780ab",
    measurementId: "G-FBD2KRYVG6"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref('contactForm')

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementalVal('name');
    var address = getElementalVal('address');
    var phone_number = getElementalVal('phone_number');
    var subject = getElementalVal('subject');
    var message = getElementalVal('message');

    saveMessages(name, address, phone_number, subject, message);
  }

  const saveMessages = (name, address, phone_number, subject, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        address: address,
        phone_number: phone_number,
        subject: subject,
        message: message,
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
