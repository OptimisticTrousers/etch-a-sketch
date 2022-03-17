let attempts = 0;

let previousGridSize = 16;

let previousMode = "erase";

const container = document.querySelector('.container');

const clearButton = document.querySelector('.clear');

const eraseButton = document.querySelector('.erase');

const rainbowButton = document.querySelector('.rainbow');

const blackButton = document.querySelector('.black-and-white');

const sliderValue = document.querySelector('output');

const screenWidth = 500;

const screenHeight = 500;

sliderValue.addEventListener('change', (event) => {

    createPad(event.target.textContent, previousMode) 
    
})


let erase = false;

eraseButton.onclick = () => erase = true;

blackButton.addEventListener('click', () => {

    createPad(previousGridSize, 'black');
})

rainbowButton.addEventListener('click', () => {
    createPad(previousGridSize, 'rainbow');
})

function clearPad(parent){

clearButton.addEventListener('click', () => {

    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }

})

}


function createPad(gridSize, mode){

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

        div.addEventListener('mousedown', (event) => {

            console.log(previousMode)


            if(erase == true){
                event.target.style.backgroundColor = "white"
            }
            else if(mode === 'rainbow'){
                div.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            }
            else if(mode === 'black'){

                div.style.backgroundColor = "black";
            }
        })
        //div.addEventListener('mouseup', draw)

        //function draw(event){

            //event.target.style.backgroundColor = '';
        //}


        container.appendChild(div);

        }

    }

}

//default mode and size for the function
createPad(16, 'black');
clearPad(container);