var ITEMS = [
  "Macbook Pro",
  "iPhone 13 Pro",
  "Razor PC",
  "Canon EOS 50d",
  "Btwin Road Bike",
];

function renderList(container, items) {
  if (!container || !items) {
    return;
  }

  for (var item of items) {
    var li = document.createElement("li");
    li.innerText = item;
    // Enable the drag
    li.draggable = true;

    //Handle the dragstart event and set the data
    li.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text", event.target.innerText);
    });

    container.appendChild(li);
  }
}

function handleOnDrop(event) {
  // Get the drag data
  var data = event.dataTransfer.getData("text");
  var li = document.createElement("li");
  li.innerText = data;
  toList.appendChild(li);
}

function allowDrop(event) {
  // cancel browsers default behaiour and allow the drop
  event.preventDefault();
}

var fromList = document.querySelector(".from-list");
var toList = document.querySelector(".to-list");
renderList(fromList, ITEMS);

//steps for drag and drop
//1) Enable the drag by setting draggble="true" on the html element
//2) Allow the drop on the target by handling ondragover event
//3) Set the data when drag starts by handling the ondragstart event
//4) Perform the drop action by handling the ondrop event
