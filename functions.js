
// referencing the board and creating an array to store the boxes
let container = document.querySelector(".container");
let boxes = [];

// referencing the slider and adding an event listener to it
let slider = document.querySelector(".slider");
slider.addEventListener("change",removeBoxes);

// initial function to create the board
createBoard();

// referencing the black, rainbow and clear buttons and adding event listeners to them
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click",clear);
let rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click",rainbow);
let blackButton = document.querySelector(".black");
blackButton.addEventListener("click",addColour);

// destroys all created box elements and invokes the createBoard function
// which completely recreates the board
function removeBoxes(){
    for (let i = 0; i < boxes.length; i++){
        boxes[i].remove();
    }
    createBoard(slider.value);
}

// creates a new board
function createBoard(size = 16){
    for (let i = 0; i < (size * size); i++){
        let box = document.createElement("div");
        box.style.width = (512 / size) + "px";
        box.style.height = (512 / size) + "px";
        box.classList.add("box");
        box.addEventListener("mouseenter", addBlack);
        container.style.gridTemplateColumns = `repeat(${size}, 2fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 2fr)`;
        container.appendChild(box);
        boxes[i] = box;
    }
}

// iterates through the boxes array setting the background colour of each box 
// to nothing which clears the board of any colour
function clear(){
    for (let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = "";
    }
}

// function that is called when the rainbow button is clicked
function rainbow(){
    // removing old event listeners
    for (let i = 0; i < slider.value * slider.value; i++){
        boxes[i].removeEventListener("mouseenter", addColour);
    }
    // adding new event listeners
    for (let i = 0; i < slider.value * slider.value; i++){
        boxes[i].addEventListener("mouseenter", addRainbow);
    }
}

// function that's called when the black button is clicked
function addColour(e){
    // removing old event listeners
    for (let i = 0; i < slider.value * slider.value; i++){
        boxes[i].removeEventListener("mouseenter", addRainbow);
    }
    // adding new event listeners
    for (let i = 0; i < slider.value * slider.value; i++){
        boxes[i].addEventListener("mouseenter", addBlack);
    }
}

// sets the background colour of a box to black
function addBlack(e){
    e.srcElement.style.backgroundColor = "black";
}

// generates a random number [0,6] and colours the box depending on that random value
function addRainbow(e){
    //colours of the rainbow: red, orange, yellow, green, blue, ivory, violet
    let rng = Math.floor((Math.random() * 7))
    switch (rng){
        case 0: e.srcElement.style.backgroundColor = "red";
        break;
        case 1: e.srcElement.style.backgroundColor = "orange";
        break;
        case 2: e.srcElement.style.backgroundColor = "yellow";
        break;
        case 3: e.srcElement.style.backgroundColor = "green";
        break;
        case 4: e.srcElement.style.backgroundColor = "blue";
        break;
        case 5: e.srcElement.style.backgroundColor = "ivory";
        break;
        case 6: e.srcElement.style.backgroundColor = "violet";
        break;
    }
}

// debugging function
function svalue(){
    console.log(slider.value);
}