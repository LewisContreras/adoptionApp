let petObject = JSON.parse(localStorage.getItem("detailView"));
// console.log();

 
let imgView = document.getElementById("pet-photo");
imgView.src = petObject.petPhoto;

let nameAndSex = document.getElementById("name-and-sex");
nameAndSex.setAttribute("name",petObject.id);
nameAndSex.firstElementChild.textContent = petObject.namePet;
nameAndSex.lastElementChild.src = `img/${petObject.sex}.png`;

let breed = document.getElementById("breed");
breed.lastElementChild.textContent = petObject.breed;

let age = document.getElementById("age");
age.lastElementChild.textContent = petObject.age;

let locationPet = document.getElementById("location-pet");
locationPet.lastElementChild.textContent = petObject.location;

let historyPetContainer = document.getElementById("history-pet-container");
historyPetContainer.firstElementChild.textContent = `Historia de ${petObject.namePet}`;
historyPetContainer.lastElementChild.textContent = petObject.history;

let contactPerson = document.getElementById("contact-person");
contactPerson.firstElementChild.firstElementChild.src = petObject.ownerPhoto;
contactPerson.lastElementChild.lastElementChild.textContent = petObject.owner;


let personalityItemsContainer = document.getElementById("personality-items-container");
let singleChar;
let allCharacteristics = ``;
for(let char of petObject.personality){
    singleChar = `
        <div class="personality-item">
            <img src="img/${char}.png" alt="${char}">
            <p class="body-1-regular">${char}</p>
        </div>
        `
    allCharacteristics += singleChar;
}
personalityItemsContainer.innerHTML = allCharacteristics;


let imgFavourites = document.getElementById("favourite-button").firstElementChild;


if (localStorage.getItem("favourites")) {
    let favouristList = JSON.parse(localStorage.getItem("favourites"));
    if (favouristList[petObject.id]) {
        imgFavourites.src = "img/guardado.png";
        imgFavourites.alt = "Favorito";
    }else{
        imgFavourites.src = "img/no-guardado.png";
        imgFavourites.alt = "No Favorito";
    }
}else{
    imgFavourites.src = "img/no-guardado.png";
    imgFavourites.alt = "No Favorito";
}






imgFavourites.addEventListener("click", checkFavourite);

function checkFavourite() {
    if (!localStorage.getItem("favourites")) {
        let idPet = petObject.id;
        let favourites = {};
        favourites[idPet] = petObject;
        imgFavourites.src = "img/guardado.png";
        imgFavourites.alt = "Favorito";
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }else{
        let favouritesObject = JSON.parse(localStorage.getItem("favourites"));
        
        if (favouritesObject[petObject.id]) {
            imgFavourites.src = "img/no-guardado.png";
            imgFavourites.alt = "No Favorito";
            delete favouritesObject[petObject.id];
            if (!(Object.keys(favouritesObject).length)) {
                localStorage.removeItem("favourites");
            }else{
                localStorage.setItem("favourites", JSON.stringify(favouritesObject));
            }
        }else{
            imgFavourites.src = "img/guardado.png";
            imgFavourites.alt = "Favorito";
            favouritesObject[petObject.id] = petObject;
            localStorage.setItem("favourites", JSON.stringify(favouritesObject));
        }
    }
}


// Boton de contactar
let contactButton = document.getElementById("contact-button");

contactButton.addEventListener("click", goToChat);

function goToChat(e) {
    let contactPerson =  {};
    contactPerson.owner = petObject.owner;
    contactPerson.ownerPhoto = petObject.ownerPhoto;
    localStorage.setItem("contactPerson", JSON.stringify(contactPerson));
}

let backButton = document.querySelector(".back-button");
backButton.addEventListener("click", goBack);

function goBack(e) {
    window.history.back();
}