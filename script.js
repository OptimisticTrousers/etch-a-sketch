let attempts = 0;

let previousGridSize = 16;
let previousMode = "black";

const container = document.querySelector('.container');

const clearButton = document.querySelector('.clear');

const eraseButton = document.querySelector('.erase');

const rainbowButton = document.querySelector('.rainbow');

const blackButton = document.querySelector('.black-and-white');

const slider = document.getElementById('slider');

const screenWidth = 500;

const screenHeight = 500;

let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

slider.addEventListener('mouseup', () => {


    let sliderOutput = document.querySelector('output').value;

    clearPad();
    createPad(sliderOutput);
})


eraseButton.onclick = () => previousMode = 'erase'; 

blackButton.addEventListener('click', () => {

    previousMode = 'black';
})

rainbowButton.addEventListener('click', () => {

    previousMode = 'rainbow'
})

function clearPad(){

    while(container.firstChild){
       container.removeChild(container.firstChild);
    }

}



clearButton.addEventListener('click', () => {

    clearPad();
    createPad(previousGridSize);
});


function changeDivColor(event){

    if(event.type == 'mouseover' && !mouseDown) return

    if(previousMode === 'erase'){
        event.target.style.backgroundColor = "white"
    }
    else if(previousMode === 'rainbow'){
        event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    }
    else if(previousMode === 'black'){

        event.target.style.backgroundColor = "black";
    }
}


function createPad(gridSize){

    for(let i = 0; i < gridSize; i++){

        const div = document.createElement('div');

        div.style.height = `${screenHeight/gridSize}px`;

        div.style.width = `${screenWidth/gridSize}px`;

        div.style.backgroundColor = "white";

        if(i != 0){

            div.style.cssFloat = "clear"
            container.appendChild(div);
        }

    for(let j = 0; j < gridSize ; j++){

        const div = document.createElement('div');

        div.style.height =`${screenHeight/gridSize}px`;

        div.style.width = `${screenWidth/gridSize}px`;

        div.style.backgroundColor = "white";

        div.style.cssFloat = "left"

        const randomRed = (Math.random() * 256)

        const randomGreen = (Math.random() * 256) 

        const randomBlue = (Math.random() * 256)

        div.addEventListener('mouseover', (event) => {

            changeDivColor(event);
        })
        div.addEventListener('mousedown', (event) => {

            changeDivColor(event);
        })

        container.appendChild(div);

        }

    }

}

//default mode and size for the function
createPad(previousGridSize);