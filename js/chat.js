let imgContactContainer = document.getElementById("chat-contact");
let chatMessagesContainer = document.querySelector(".chat-messages-container");

if(localStorage.getItem("messages")){
    let messagesObject = JSON.parse(localStorage.getItem("messages"));
    imgContactContainer.firstElementChild.src = messagesObject.ownerPhoto;
    imgContactContainer.nextElementSibling.textContent = messagesObject.owner;
    let chatMessages = `
            <div class="chat-message">
                <p class="body-2-regular">${messagesObject.inputTime}</p>
                <div class="chat-sent">
                    <div class="body-2-regular">${messagesObject.inputMessage}</div>
                </div>
            </div>
            <div class="chat-message">
                <p class="body-2-regular">${messagesObject.outputTime}</p>
                <div class="chat-received">
                    <div class="body-2-regular">${messagesObject.outputMessage}</div>
                </div>
            </div>
        `
    chatMessagesContainer.innerHTML = chatMessages;
    localStorage.removeItem("messages");






}else{
    let contactObject = JSON.parse(localStorage.getItem("contactPerson"));

    imgContactContainer.firstElementChild.src = contactObject.ownerPhoto;
    imgContactContainer.nextElementSibling.textContent = contactObject.owner;
    localStorage.removeItem("contactPerson");
    let infoChat = `
    <p id="no-messages" class="body-1-bold text-color-black">Aún no hay mensajes</p>
    `
    chatMessagesContainer.innerHTML = infoChat;
}


let backButton = document.querySelector(".back-button");
backButton.addEventListener("click", goBack);

function goBack(e) {
    window.history.back();
}

let chatInput = document.getElementById("chat-input");
chatInput.addEventListener("keypress", sendMessage);

function sendMessage(e) {
    let content;
    let time = new Date()
    console.log(time.getDate())
    console.log(time.getDay())
    console.log(time.getSeconds())
    console.log(time.getTime())
    console.log(time.getTimezoneOffset())
    console.log(time.getUTCHours())
    if(e.keyCode == 13){
        content = chatInput.value;
        chatMessagesContainer.innerHTML =`
        <div class="chat-message">
            <p class="body-2-regular">${time.getMinutes()}</p>
            <div class="chat-sent">
                <div class="body-2-regular">${content}</div>
            </div>
        </div>
    ` ;
    }
}
