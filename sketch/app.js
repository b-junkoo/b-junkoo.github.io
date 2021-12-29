document.body.onload = createGrid;
let gridLength = 16;

// Grid Creator
function createGrid () {
    for (let i=1; i<=gridLength*gridLength; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("block");
        const text = document.createTextNode("");
        newDiv.appendChild(text);

        let element = document.getElementById("grid")
        element.appendChild(newDiv)
    }
}

let toggle = true;
let colorButton = true;

// Helper Functions
function colorIn(e) {
    e.target.style.backgroundColor="orange"
}

function erase(e) {
    e.target.style.backgroundColor="";
}

// Event Listeners
let grid = document.getElementById("grid");
grid.addEventListener("mousedown", () => {
    toggle = !toggle;

    // colorButton will only be false if the "Eraser" button is clicked
    if (colorButton) {
        grid.addEventListener("mouseover", colorIn ,false);
    } else {
        grid.addEventListener("mouseover", erase, false)
    }
    
    // Makes erasing and coloring toggleable via mouse click
    if (toggle) {
        grid.removeEventListener("mouseover", colorIn, false);
        grid.removeEventListener("mouseover", erase, false);
    }
}, false)

// Loops through every grid block and sets their background color to ""
let clear = document.getElementById('clear');
clear.addEventListener("mousedown", () => {
    let blocks = document.querySelectorAll('div.block');
    blocks.forEach((block) => {
        block.style.backgroundColor = "";
    })
});
 
let color = document.getElementById('color');
color.addEventListener("mousedown", () => {
    colorButton = true;
})

let eraser = document.getElementById('eraser');
eraser.addEventListener("mousedown", () => {
    colorButton = false;
})