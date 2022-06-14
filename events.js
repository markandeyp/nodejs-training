function messageChange(event) {
  var value = event.target.value;
  var outputDiv = document.getElementById("output");
  outputDiv.innerText = value;
}

function isBinary(event) {
  if (event.key != 0 && event.key != 1) {
    event.preventDefault(); //stops the event
  }
}

function renderButtons() {
  var inputBox = document.getElementById("buttonCountTB");
  var buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";
  var buttonCount = inputBox.value;
  if (buttonCount) {
    for (i = 1; i <= buttonCount; i++) {
      var button = document.createElement("button");
      button.innerText = "Button " + i;

      button.addEventListener("click", buttonClick);

      buttonsDiv.appendChild(button);
    }
  }
}

function buttonClick(event) {
  console.log("button is clicked", event.target.innerText);
}
