const firebaseConfig = {
  apiKey: "AIzaSyBBWkYDcloTDLHk8bdvDkI1YNsdePP5fkc",
  authDomain: "my-first-website-71e0b.firebaseapp.com",
  projectId: "my-first-website-71e0b",
  storageBucket: "my-first-website-71e0b.firebasestorage.app",
  messagingSenderId: "183239885196",
  appId: "1:183239885196:web:860f3032601b6a875016a9",
  measurementId: "G-9EWBJCKCSR"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);

document.getElementById("authForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await firebase.signInWithEmailAndPassword(auth, email, password);
    document.getElementById("status").textContent = "ברוך הבא: " + userCredential.user.email;
  } catch (error) {
    document.getElementById("status").textContent = "שגיאה: " + error.message;
  }
});

document.getElementById("signupLink").addEventListener("click", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await firebase.createUserWithEmailAndPassword(auth, email, password);
    document.getElementById("status").textContent = "נרשמת בהצלחה: " + userCredential.user.email;
  } catch (error) {
    document.getElementById("status").textContent = "שגיאה: " + error.message;
  }
});
