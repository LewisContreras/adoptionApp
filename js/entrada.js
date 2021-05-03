let logo = document.getElementById("container-logo");


setTimeout(quitarLogo, 1000);

function quitarLogo(){
    logo.classList.toggle("hidden");
    var imagenInicial = document.getElementById("container-imagen-inicial");
    var firstButton = document.getElementById("first-button");
    firstButton.addEventListener("click", nextImage);
    imagenInicial.classList.toggle("hidden");
}



function nextImage(){
    let imagenInicial = document.getElementById("container-imagen-inicial");
    imagenInicial.classList.toggle("scene_element--fadeoutright");
    let imagenSegunda = document.getElementById("container-imagen-segunda");
    imagenSegunda.classList.toggle("hidden");
    imagenSegunda.classList.toggle("scene_element--fadeinrightentry")
}

let secondButton = document.getElementById("second-button");
secondButton.addEventListener("click", goToHome);

function goToHome(e) {
    e.preventDefault();
    let imagenSegunda = document.getElementById("container-imagen-segunda");
    imagenSegunda.classList.toggle("scene_element--fadeoutrightentry")
    setTimeout(()=>window.location = "index.html", 250)
}

