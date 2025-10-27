// Click Event
let button = document.getElementById("submitButton");

button.addEventListener("click", displayMessage)

function displayMessage() {
    let outputDiv = document.getElementById("outputDiv");
    let name = document.getElementById("nameInput").value;

    console.log("Button Clicked");
    if (name === "") {
        outputDiv.style.backgroundColor = "#ff0000";
        outputDiv.textContent = "Error: Please enter a name.";
    } else {
        outputDiv.style.backgroundColor = "#00ff00";
        outputDiv.textContent = `Welcome, ${name}`;
    }
};

// Mouse Event
let mouseTracker = document.getElementById("mouseTracker");
let coordinatesOutput = document.getElementById("coordinates")

mouseTracker.addEventListener("mousemove", trackMouse);


function trackMouse(e) {
    console.log("Event type: " + e.type)
    coordinatesOutput.innerHTML = `Mouse Coordinates: X: ${e.offsetX}, Y: ${e.offsetY}`;
}

// Keyboard Event
itemInput = document.getElementById("nameInput")

itemInput.addEventListener("keydown", inputEvent);

function inputEvent(e) {
    if (e.key === "Enter") {
        displayMessage()
    }
}