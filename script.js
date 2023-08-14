let canva = document.querySelector('.canva');

for (i = 0; i < 16 * 16; i++) {

    let square = document.createElement('div');
    square.classList.add('square');
    canva.appendChild(square)
    // console.log(i);
    

}

let squares = document.querySelectorAll('.square');
let squaresArray = Array.from(squares);

squaresArray.forEach(square => {square.addEventListener('mouseenter', changeColor)})

function changeColor (e) {

    let index = squaresArray.indexOf(e.target)
    squares[index].style.backgroundColor = 'lightgrey';
    // console.log(e);
    // console.log('Índice:', index);
    

}