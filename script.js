let canva = document.querySelector('.canva');

let gridPixels = 16;

function loadGrid(){
    
    canva.innerHTML = '';
    
    for (i = 0; i < gridPixels * gridPixels; i++) {
        
        let square = document.createElement('div');
        square.classList.add('square');
        canva.appendChild(square)
        // console.log(i);
        
        
    }
    
}


loadGrid();

function goThrough (){

    

}

let squares = document.querySelectorAll('.square');
let squaresArray = Array.from(squares);

squaresArray.forEach(square => {square.addEventListener('mouseenter', changeColor)});


function changeColor (e) {

    let index = squaresArray.indexOf(e.target)
    squares[index].style.backgroundColor = 'white';
    // console.log(e);
    // console.log('Índice:', index);
   
}

let resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', showInput);


let body = document.querySelector('body');

let gridInput = document.createElement('input');

let inputGetBtn = document.createElement('button');
inputGetBtn.classList.add('inputGetBtn');
inputGetBtn.textContent = 'SET GRID SIZE'
inputGetBtn.addEventListener('click', getIpuntValue);

gridInput.classList.add('gridChoice');
 

function showInput () {
 
  body.appendChild(gridInput);
  body.appendChild(inputGetBtn);
  resetBtn.remove();
   
}


function getIpuntValue () {

    gridPixels = gridInput.value;
    console.log(gridPixels);
    changePixels();

}


let inputValue = gridInput.value;
console.log(inputValue);

function changePixels () {
 
  let newColumns = `repeat(${gridPixels}, 1fr)`;
  canva.style.gridTemplateColumns = newColumns;
  
  loadGrid();
 
}