const table = document.getElementById("pixelArt");
let row = 0;
let col = 7;
let currColor = 'red';
const colorSelector = document.getElementById('colors');
let mouseDown = 0;
console.log(colorSelector);


//Functions relating to the table itself


//Inserting Row Function
function insertRow() {
  //Modify row variable
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

//Removing row function
function removeRow() {
  //Modify row variable
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

    //adding event listeners to the cells
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

  //Update table
  for (let i = 0; i < row; i++) {
    table.rows[i].deleteCell(-1);
  }


}


//Changes set color 
colorSelector.addEventListener('change', function() {
  currColor = colorSelector.options[colorSelector.selectedIndex].value;
  console.log(colorSelector.options[colorSelector.selectedIndex].value);
});



//Color Fill Functions

//Fill all uncolored pixels
function changeAllUncolored() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      //Obtaining color
      let currCell = table.rows[i].cells[j];
      let cellColor = currCell.style.backgroundColor;

      //Check for default color and replace
      if (cellColor === "rgb(255, 255, 242)") {
        console.log("pass");
        currCell.style.backgroundColor = currColor;
      }

    }
  }
}

//Fill ALL pixels
function changeAll() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      //Change color
      let currCell = table.rows[i].cells[j];
      let cellColor = currCell.style.backgroundColor;
      currCell.style.backgroundColor = currColor;

    }
  }
}

//Set all pixels to the default color
function clearAll() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let currCell = table.rows[i].cells[j];
      currCell.style.backgroundColor = "rgb(255,255,242)";
    }
  }
}


// helper functions that help track down
// if the mouse is being held down.

document.body.onmousedown = function() {
  mouseDown = 1;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}