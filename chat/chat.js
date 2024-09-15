
function sendMessage() {
    const inputField = document.getElementById("userInput");
    const userMessage = inputField.value.trim();

    if (userMessage !== "") {
        appendMessage(userMessage, "user");
        inputField.value = "";
        setTimeout(() => botResponse(userMessage), 500);
    }
}

function appendMessage(message, sender) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; 
}

function botResponse(userMessage) {
    let response = getBotResponse(userMessage);
    appendMessage(response, "bot");
}

function getBotResponse(input) {
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there! How are you doing?",
        "how are you": "I’m just a bot, but I’m doing well!",
        "bye": "Goodbye! Have a great day!",

    };

    return responses[input.toLowerCase()] || "Sorry, I don't understand that.";
}
