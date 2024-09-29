const container = document.querySelector(".container")
let gridSize = 16;

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const col = document.createElement("div");
        col.className = "col";
        container.appendChild(col);
        col.textContent = "C" + i;   

        for (let j = 0; j < gridSize; j++) {
            const row = document.createElement("div");
            row.className = "row";
            col.appendChild(row);
            //row.textContent = "R" + j;

            row.addEventListener('mouseenter',function(){
                row.style.backgroundColor = "lightblue";
            });
        }
    }

}

/*function selectCell(colIndex, rowIndex){
    const cols = document.querySelectorAll(".col");
    const selectedCol = cols[colIndex];

    const rows = selectedCol.querySelectorAll(".row");
    const selectedCell = rows[rowIndex];

    return selectedCell;
}*/


makeGrid(gridSize);



/*const cell = selectCell(0,0);
if (cell) {
    console.log(cell.textContent); // Logs the text content of the selected cell
    cell.style.backgroundColor = "yellow"; // Highlight the selected cell, for example
}*/