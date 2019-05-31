var table = document.getElementById("pixelArt");
var row = 0;
var col = 4;

function insertRow() {
    row++;

    //Update table
    let newRow = table.insertRow(-1);
    for (let i = 0; i < col; i++) {
        let newCell = newRow.insertCell(i);
        newCell.innerHTML = "boop";
        console.log("beep");
    }
}

function removeRow() {
    row--;
    if (row < 0) row = 0;

    //Update table
    table.deleteRow(-1);
}

function addColumn() {
    col++;

    //Update table
    for (let i = 0; i < row; i++) {
        let newCell = table.rows[i].insertCell(-1);
        newCell.innerHTML = "boop";
    }

}

function removeColumn() {

    //Modify column variable
    col--;
    if (col < 0) col = 0;

    for (let i = 0; i < row; i++) {
        table.rows[i].deleteCell(-1);
    }


}