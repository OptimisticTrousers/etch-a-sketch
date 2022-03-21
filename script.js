let attempts = 0;

let previousGridSize = 16;
let previousMode = "black";

const container = document.querySelector('.container');

const clearButton = document.querySelector('.clear');

const eraseButton = document.querySelector('.erase');

const rainbowButton = document.querySelector('.rainbow');

const blackButton = document.querySelector('.black-and-white');

const colorGrabber = document.querySelector('.color-grabber');

const slider = document.getElementById('slider');

const currentColorDiv = document.querySelector('.current-color');

const backgroundColorButton = document.querySelector('.background');

const lightingButton = document.querySelector('.lighting')

const shadingButton = document.querySelector('.shading');

const screenWidth = 500;

const screenHeight = 500;

let currentColor = ""

shadingButton.addEventListener('click', () => {

    previousMode = "shading";
})

backgroundColorButton.addEventListener('click', () =>{

})

colorGrabber.addEventListener('click', () => {

    previousMode = 'picker';

})

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


    const randomRed = (Math.random() * 256)

    const randomGreen = (Math.random() * 256) 

    const randomBlue = (Math.random() * 256)

    let opacity = Number(event.target.style.opacity);
    //got this from stackoverflow to make a hold and click: https://stackoverflow.com/questions/15098584/check-if-mouse-button-is-down-while-hovering


    if(event.buttons == 1 || event.buttons == 3){

        //for shading and lighting https://stackoverflow.com/questions/58511950/javascript-etch-a-sketch-shading-pen-stops-increasing-opacity-after-another-pen

        if(previousMode === 'shading'){

            event.target.style.opacity = opacity <= 0 ? "0" : opacity - 0.1 + "";
        }
        else if(previousMode === 'lighting'){

            event.target.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
        }
        else if(previousMode === 'picker'){

            currentColor = event.target.style.backgroundColor;
            currentColorDiv.style.backgroundColor = currentColor;
            console.log(currentColor);
        }
        else if(previousMode === 'erase'){
            event.target.style.backgroundColor = "white"
        }
        else if(previousMode === 'rainbow'){
            event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        }
        else if(previousMode === 'black'){

            event.target.style.backgroundColor = "black";
        }

    }

}


function createPad(gridSize){

    for(let i = 0; i < gridSize; i++){

        const div = document.createElement('div');

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

        previousGridSize = gridSize;

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