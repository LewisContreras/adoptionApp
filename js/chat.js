let contactObject = JSON.parse(localStorage.getItem("contactPerson"));
let imgContactContainer = document.getElementById("chat-contact");
imgContactContainer.firstElementChild.src = contactObject.ownerPhoto;
imgContactContainer.nextElementSibling.textContent = contactObject.owner;
 localStorage.removeItem("contactPerson");