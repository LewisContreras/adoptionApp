import {dataDogs, dataCats} from "./dataBase.js";

console.log(document.referrer.includes("entrada.html"));

let dogButton = document.getElementById("dog-category");
let catButton = document.getElementById("cat-category");
let cardsContainer = document.querySelector(".cards-container");

dogButton.addEventListener("click", verifyPets);
catButton.addEventListener("click", verifyPets);


function verifyPets(e) {
    let current = e.currentTarget;
    let opacityVerify = current.classList.contains("opacity");
    let dataPets;
    if(!opacityVerify){
        return
    }else if(current.getAttribute("name") == "dog-category") {
        dataPets = dataDogs;
    }else{
        dataPets = dataCats;
    }

    listDogs(current, dataPets);
    // current.classList.remove("opacity");
}

function listDogs(current, dataPets) {
     

    let petsContainer = ``;
    let singlePet;
    let cont = 1;
    for (const idPet in dataPets) {
        let relative = "relative-up";
        let pet = dataPets[idPet];
        let namePet = pet.namePet;
        let breed = pet.breed;
        let petPhoto = pet.petPhoto;
        let id = pet.id;

        if(cont%2 == 0){
            relative = "relative-down"
        }

        singlePet = `
        <a href="vista-detalle.html" class="scene_element scene_element--fadeinup">
                <div style="background-image:linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url('${petPhoto}') ;" class="card ${relative}" name="${id}">
                    <p class="body-2-bold text-color-white">${namePet}</p>
                    <p class="body-2-regular text-color-white">${breed}</p>
                </div>
            </a>
            `
        cont += 1;
        petsContainer += singlePet;
    }
    cardsContainer.innerHTML = petsContainer;
    current.classList.remove("opacity");
    current.classList.add("no-select")
    if (current.getAttribute("name") == "dog-category") {
        catButton.classList.add("opacity");
        catButton.classList.remove("no-select")
        localStorage.removeItem("cat");
    }else{
        dogButton.classList.add("opacity");
        dogButton.classList.remove("no-select")
        localStorage.setItem("cat", "exist");
    }
}
if(localStorage.getItem("cat")){
    listDogs(catButton,dataCats)
}else{
    listDogs(dogButton,dataDogs)
}


/////////////////////////////////////////////////
 cardsContainer.addEventListener("click", goToDetail)

 function goToDetail(e) {
     let dataPets;
     let current = e.currentTarget;
     let target = e.target;
     if (!(target.classList.contains("card"))) {
         target = target.parentElement;
     }
    let idPet = target.getAttribute("name");
    if(idPet[0] === "p"){
        dataPets = dataDogs;
    }else{
        dataPets = dataCats;
    }
    localStorage.setItem("detailView", JSON.stringify(dataPets[idPet]));
 }