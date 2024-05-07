const firebaseConfig = {
    apiKey: "AIzaSyDn1i2lkV6rvkuCCIE5jniUSIiIl8gIEg0",
    authDomain: "contribution-165fc.firebaseapp.com",
    databaseURL: "https://contribution-165fc-default-rtdb.firebaseio.com",
    projectId: "contribution-165fc",
    storageBucket: "contribution-165fc.appspot.com",
    messagingSenderId: "298078814142",
    appId: "1:298078814142:web:512b5a4a2948c2d74f83ef"
  };

  // initialize firebase
  firebaseConfig.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebaseConfig.databaseURL().ref('contribution');

  document.getElementById("contribution").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var category = getElementVal('category');
    var description = getElementVal('description');
    var instructions = getElementVal('intstructions');

    saveMessages(name, category, description, instructions);
}

const saveMessages = (name, category, description, instructions) => {
  var newContactForm = contactFormDB.push();

  newSavemessages.set({
      name: name,
      category: category,
      description: description,
      instructions: instructions,
  });
}

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
