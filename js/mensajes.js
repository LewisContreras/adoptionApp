import {dataMessages} from "./dataBase.js";
let messagesContainer = document.querySelector(".messages-container");
console.log(dataMessages)
let allMessages = ``;
for (const message of dataMessages) {

    const {owner, ownerPhoto, inputMessage, outputMessage, inputTime, outputTime} = message;
    let singleMessage = `
        <div class="box-message" name="${owner.split(" ").join("-")}">
        <div class="info-message">
            <div class="contact-img">
                <img src="${ownerPhoto}" alt="Foto del contacto">
            </div>
            <div class="message-data">
                <div class="name-and-time">
                    <p class="body-2-bold">${owner}</p>
                    <p class="caption">${outputTime}</p>
                </div>
                <p class="body-2-regular">${outputMessage}</p>
                </div>
            </div>
            <div class="arrow-message">
                <img src="img/chevron-right.png" alt="">
            </div>
        </div>
    `
    allMessages += singleMessage;
}
messagesContainer.innerHTML = allMessages;

let container = document.querySelector(".messages-container")
container.addEventListener("click", goToChat)
function goToChat(e) {
    e.preventDefault();
    let target = e.target;
    let nameContact = target.getAttribute("name").split("-").join(" ");
    for(let message of dataMessages){
        if(message.owner == nameContact){
            localStorage.setItem("messages", JSON.stringify(message));
        }
    }
    window.location = "chat.html"


}