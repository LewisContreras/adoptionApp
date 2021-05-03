let nameInput = document.getElementById("name-input");
let lastnameInput = document.getElementById("lastname-input");
let emailInput = document.getElementById("email-input");
let nameCurrent = document.getElementById("name-current-info");
let userForm = document.querySelector(".user-form");
let editAccount = document.getElementById("edit-account");

if (localStorage.getItem("userInfo")) {
    let userInfoOb = JSON.parse(localStorage.getItem("userInfo"));
    nameCurrent.textContent = userInfoOb.nameUser + " " + userInfoOb.lastname;
    nameInput.value = userInfoOb.nameUser;
    lastnameInput.value = userInfoOb.lastname;
    emailInput.value = userInfoOb.email;
}

editAccount.addEventListener("click", ()=>userForm.reset())

let userInfo ={}

userForm.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    userInfo.nameUser = nameInput.value;
    userInfo.lastname = lastnameInput.value;
    userInfo.email = emailInput.value;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    location.reload();
}

