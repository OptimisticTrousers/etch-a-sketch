let attempts = 0;

let previousGridSize = 16;

let previousMode = "black";

const container = document.querySelector('.container');

const clearButton = document.querySelector('.clear');

const eraseButton = document.querySelector('.erase');

const rainbowButton = document.querySelector('.rainbow');

const blackButton = document.querySelector('.black-and-white');

const sliderValue = document.querySelector('.slider');

const screenWidth = 500;

const screenHeight = 500;

rainbowButton.addEventListener('click', () => {

    clearPad();
    createPad(previousGridSize, 'rainbow');
})

sliderValue.addEventListener('change', (event) => {

    clearPad();
    console.log(document.querySelector('output'));
    createPad(document.querySelector('output').value, previousMode);
    
})

eraseButton.addEventListener('click', (event) => {
    
    if(event.target.style.backgroundColor != "white"){
        event.target.style.backgroundColor = "white";
    }

})

blackButton.addEventListener('click', () => {
    clearPad();
    createPad(previousGridSize, 'black');
})

function clearPad(parent){

clearButton.addEventListener('click', () => {

    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }

})

}


function createPad(gridSize, mode){

    if(gridSize == undefined){
        gridSize = previousGridSize;
    }

    for(let i = 0; i < gridSize; i++){

        const div = document.createElement('div');

        let userHasHovered = false;

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

        previousGridSize = gridSize;

        previousMode = mode;

        div.addEventListener('mouseover', () => {

            if(mode == 'black'){

                div.style.backgroundColor = "black";
            }
            else if (mode == 'rainbow'){

            div.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            }


        })


        container.appendChild(div);

        }

    }

}

//default mode and size for the function
createPad(previousGridSize, "rainbow");

clearPad(container);