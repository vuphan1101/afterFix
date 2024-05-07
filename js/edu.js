// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = getDatabase(app);
  
  // Get a reference to the recycling facilities node in the database
  const recyclingFacilitiesRef = ref(database, "recyclingFacilities");
  
  // Retrieve the recycling facilities from the database and add them to the page
  onValue(recyclingFacilitiesRef, (snapshot) => {
    const recyclingFacilities = snapshot.val();
    const recyclingFacilitiesList = document.getElementById("recyclingFacilities");
    recyclingFacilitiesList.innerHTML = "";
    for (const key in recyclingFacilities) {
      const recyclingFacility = recyclingFacilities[key];
      const li = document.createElement("li");
      li.textContent = `${recyclingFacility.name} - ${recyclingFacility.address}`;
      recyclingFacilitiesList.appendChild(li);
    }
  });