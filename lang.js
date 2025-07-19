let isEnglish = false;
let isDark = true;

const langData = {
  he: {
    login: "התחברות",
    username: "שם משתמש",
    password: "סיסמה",
    remember: "זכור אותי",
    forgot: "שכחת סיסמה?",
    btn: "התחבר",
    registerText: "אין לך חשבון?",
    register: "הרשמה"
  },
  en: {
    login: "Login",
    username: "Username",
    password: "Password",
    remember: "Remember me",
    forgot: "Forgot password?",
    btn: "Login",
    registerText: "Don't have an account?",
    register: "Register"
  }
};

function toggleLanguage() {
  isEnglish = !isEnglish;
  const lang = isEnglish ? langData.en : langData.he;
  document.querySelector("h1").textContent = lang.login;
  document.querySelectorAll(".input-box input")[0].placeholder = lang.username;
  document.querySelectorAll(".input-box input")[1].placeholder = lang.password;
  document.querySelector(".remember-forgot label").innerHTML = `<input type="checkbox"> ${lang.remember}`;
  document.querySelector(".remember-forgot a").textContent = lang.forgot;
  document.querySelector(".btn").textContent = lang.btn;
  document.querySelector(".register-link p").innerHTML = `${lang.registerText} <a href="#">${lang.register}</a>`;
  document.getElementById("langToggle").textContent = isEnglish ? "🌐 עברית" : "🌐 English";
}

function toggleMode() {
  document.body.classList.toggle("light-mode");
  isDark = !isDark;
  document.getElementById("modeToggle").textContent = isDark ? "☀️" : "🌙";
}

document.getElementById("langToggle").addEventListener("click", toggleLanguage);
document.getElementById("modeToggle").addEventListener("click", toggleMode);
