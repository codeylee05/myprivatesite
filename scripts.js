// Disable right-click (Security)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  // Disable text selection (Security)
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });

const form = document.getElementById("login-form");
const username = document.getElementById("un");
const email = document.getElementById("em");
const password = document.getElementById("ps");
/*
form.addEventListener("submit", e => {
    e.preventDefault();
    isValidInput();
});
*/
function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.err');

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};
function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.err');

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error")
};
/*
function isValidInput() {
    const usernameValue = username.value.trim();
    //const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "") {
        setError(username, "Username is required");
    } else if (usernameValue !== "soyelchico") {
        setError(username, "Incorrect username");
    }
     else {
        setSuccess(username);
    }

    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (passwordValue !== "soyElChicoQueLeGustaTodo5002") {
        setError(password, "Incorrect Password")
    }
    else {
        setSuccess(password);
    }
}
*/
form.addEventListener("submit", e => {
    if (!isValidInput()) {
        e.preventDefault();
    }
});

function isValidInput() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    let isValid = true;

    if (usernameValue === "") {
        setError(username, "Username is required");
        isValid = false;
    } else if (usernameValue !== "soyelchico") {
        setError(username, "Incorrect username");
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (passwordValue === "") {
        setError(password, "Password is required");
        isValid = false;
    } else if (passwordValue !== "soyElChicoQueLeGustaTodo5002") {
        setError(password, "Incorrect Password");
        isValid = false;
    } else {
        setSuccess(password);
    }

    return isValid;
};
