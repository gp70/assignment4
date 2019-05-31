var table = document.getElementById("pixelArt");
var row = 0;
var col = 4;
var currColor = 'red';
const colorSelector = document.getElementById('colors');
var mouseDown = 0;
console.log(colorSelector);

//options[document.getElementById("colors").selectedIndex].value;

function insertRow() {
    row++;
    currColor = '#FFFFF2';

    //Update table
    let newRow = table.insertRow(-1);
    for (let i = 0; i < col; i++) {
        let newCell = newRow.insertCell(i);
        newCell.style.backgroundColor = "#FFFFF2";

        //Click color change
        newCell.addEventListener('mousedown', function(e) {
            this.style.backgroundColor = currColor;
        });

        newCell.addEventListener('mouseover', function(e) {
            if (mouseDown)
                this.style.backgroundColor = currColor;
        });


    }

    currColor = colorSelector.options[colorSelector.selectedIndex].value;
}

function removeRow() {
    row--;
    if (row < 0) row = 0;

    //Update table
    table.deleteRow(-1);
}

function addColumn() {
    col++;
    currColor = '#FFFFF2';

    //Update table
    for (let i = 0; i < row; i++) {
        let newCell = table.rows[i].insertCell(-1);
        newCell.style.backgroundColor = "#FFFFF2";

        //change color onClick
        newCell.addEventListener('mousedown', function(e) {
            this.style.backgroundColor = currColor;
        });

        newCell.addEventListener('mouseover', function(e) {
            if (mouseDown)
                this.style.backgroundColor = currColor;
        });


    }
    currColor = colorSelector.options[colorSelector.selectedIndex].value;
}

function removeColumn() {

    //Modify column variable
    col--;
    if (col < 0) col = 0;

    for (let i = 0; i < row; i++) {
        table.rows[i].deleteCell(-1);
    }


}


//Color Change function

colorSelector.addEventListener('change', function() {
    currColor = colorSelector.options[colorSelector.selectedIndex].value;
    console.log(colorSelector.options[colorSelector.selectedIndex].value);
});



//Color Fill Functions

function changeAllUncolored() {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let currCell = table.rows[i].cells[j];
            let cellColor = currCell.style.backgroundColor;
            if (cellColor === "rgb(255, 255, 242)") {
                console.log("pass");
                currCell.style.backgroundColor = currColor;
            }

        }
    }
}

function changeAll() {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let currCell = table.rows[i].cells[j];
            let cellColor = currCell.style.backgroundColor;
            currCell.style.backgroundColor = currColor;

        }
    }
}

function clearAll() {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let currCell = table.rows[i].cells[j];
            currCell.style.backgroundColor = "rgb(255,255,242)";
        }
    }
}

document.body.onmousedown = function() {
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}