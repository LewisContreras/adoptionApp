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
                    <div class="body-2-regular"><div>${messagesObject.inputMessage}</div></div>
                </div>
            </div>
            <div class="chat-message">
                <p class="body-2-regular">${messagesObject.outputTime}</p>
                <div class="chat-received">
                    <div class="body-2-regular"><div>${messagesObject.outputMessage}</div></div>
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
    let time = new Date();
    let amOrPm = " AM";
    let oneDigit = "";
    if(e.keyCode == 13 && chatInput.value  && chatInput.value.split(" ").every(e => e.length == 0) == false){
        try {
            let noMessages = document.getElementById("no-messages");
            noMessages.classList.add("hidden");
        } catch (error) {
        } 
        
        if (time.getMinutes()/10 < 1) {
            oneDigit = "0";
        }
        if (time.getHours()/12 >= 1) {
            amOrPm = " PM"
        }
        let currentHour = String(time.getHours()%12) + ":" + oneDigit + String(time.getMinutes()) + amOrPm;
        content = chatInput.value;
        let div = document.createElement("div");
        div.classList.add("chat-sent-container");
        if (chatMessagesContainer.lastElementChild.classList.contains("chat-sent-container")) {
            div.innerHTML =`
            <div class="chat-message">
                <div class="chat-sent">
                    <div><div><p  class="body-2-regular break-word">${content}</p></div></div>
                </div>
            </div>
            `
        }else{
            div.innerHTML =`
            <div class="chat-message">
                <p class="body-2-regular">${currentHour}</p>
                <div class="chat-sent">
                    <div><div><p  class="body-2-regular break-word">${content}</p></div></div>
                </div>
            </div>
            `
        }
        
        window.scrollTo(0,document.body.scrollHeight);
        console.log(document.body.scrollHeight-1000)
        ;

        chatMessagesContainer.appendChild(div)
        chatInput.value = "";
    }
}
