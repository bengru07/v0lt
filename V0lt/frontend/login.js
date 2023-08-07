function changeValues(login, signUp, loginTitle) {
    document.getElementById("login").style.display = login;
    document.getElementById("sign-up").style.display = signUp;
    document.getElementById("login-title").textContent = loginTitle;
}

function changeStart() {
    let login = document.getElementById("login").style.display !== "none";
    if (login) {
        changeValues("none", "block", "Already have an account? Log in here!");
    } else {
        changeValues("block", "none", "Don't have an account yet? Create one here!");
    }
}

function submitLogin() {
    let username = document.getElementById("l-username").value;
    let password = document.getElementById("l-password").value;
    if (username === "") {
        alert("Please enter a username.");
        return;
    } else if (password === "") {
        alert("Please enter a password.");
        return;
    }
}

function submitSignUp() {
    let username = document.getElementById("s-username").value;
    let password = document.getElementById("s-password").value;
    let confirmPassword = document.getElementById("s-password-repeat").value;
    if (username === "") {
        alert("Please enter a username.");
        return;
    } else if (password === "") {
        alert("Please enter a password.");
        return;
    } else if (confirmPassword === "") {
        alert("Please confirm your password.");
        return;
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
}