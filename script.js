const sketchArea = document.querySelector(".Sketch-Area");
const cellArea = document.querySelector(".cell")

let gridSize = 16;
const sketchAreaSize = 640;
let backgroundColor = "black";
let rainbowMode = false;
let pencilToggle = false;


function makeGrid(gridSize) {

    sketchArea.innerHTML = '';
    let cellSize = sketchAreaSize/gridSize;

    for (let i = 0; i < gridSize*gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell'; // Add class for styling
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        sketchArea.appendChild(cell); // Append the item to the container


        cell.addEventListener('mouseenter',function(){
            
            cell.style.backgroundColor = backgroundColor;

            if(rainbowMode == true){
                pencilToggle = false;
                rainbow();
            }

            if(pencilToggle == true){
                rainbowMode = false;
                pencilMode();
            }
        })
       
    }
}

function newGrid(){
    let newGridSize = prompt("Enter New grid Size: 2-100")
    gridSize = parseInt(newGridSize);

    if(newGridSize >= 2 && newGridSize <= 100){

        gridSize = newGridSize;
        makeGrid(gridSize);
    }else{
        alert("Must be between 2-100");
    }
}


function rainbow(){

    let rgbValue;  
    rainbowMode = true;

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    rgbValue = `rgb(${red}, ${green}, ${blue})`;

    backgroundColor = rgbValue;
}

function pencilMode() {
   
}

function clearBtn(){
    makeGrid(gridSize);
}



makeGrid(gridSize);

