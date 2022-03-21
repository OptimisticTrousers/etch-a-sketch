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

const userColorPicker = document.getElementById('picker')

const backgroundColorButton = document.querySelector('.background');

const backgroundColorPicker = document.getElementById('background-picker')

const lightingButton = document.querySelector('.lighting')

const shadingButton = document.querySelector('.shading');

const screenWidth = 500;

const screenHeight = 500;

//using one's own industry to produce manufactured goods 
//using one's own industries to produce manufactured goods
//instead of relying on the import of manufactured good

let RGBColor = ""

let backgroundColor = ""

let userColor = "";

function getBackgroundColor(event){

    backgroundColor = event.target.value;

    container.style.backgroundColor = `${backgroundColor}`;
}

backgroundColorPicker.addEventListener('change', (event) => {

    getBackgroundColor(event)
})

backgroundColorPicker.addEventListener('input', (event) => {

    getBackgroundColor(event)
})

userColorPicker.addEventListener('change', (event) => {

    previousMode = 'custom'
    getUserColor(event)

}, false);

userColorPicker.addEventListener('input', (event) => {

    previousMode = 'custom'
    getUserColor(event)

}, false);

function getUserColor(event){

    userColor = event.target.value;
}

lightingButton.addEventListener('click', () => {

    previousMode = "lighting";
})

shadingButton.addEventListener('click', () => {

    previousMode = "shading";
})


colorGrabber.onclick = () => previousMode = 'grabber';

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

function RGBtoHex(RGBValue){

    let sep = RGBValue.indexOf(",") > -1 ? "," : "";

    RGBValue = RGBColor.substr(4).split(")")[0].split(sep);

    let r = (+RGBValue[0]).toString(16),
        g = (+RGBValue[1]).toString(16),
        b = (+RGBValue[2]).toString(16);

    if(r.length == 1){
        r = "0" + r;
    }
    if(g.length == 1){
        g = "0" + g;
    }
    if(b.length == 1){
        b = "0" + b;
    }

    return "#" + r + g + b;

}



clearButton.addEventListener('click', () => {

    clearPad();
    createPad(previousGridSize);
});


function changeDivColor(event, div){


    const randomRed = (Math.random() * 256)

    const randomGreen = (Math.random() * 256) 

    const randomBlue = (Math.random() * 256)

    let opacity = Number(event.target.style.opacity);

    let grabberToggle = false;
    //got this from stackoverflow to make a hold and click: https://stackoverflow.com/questions/15098584/check-if-mouse-button-is-down-while-hovering


    if(event.buttons == 1 || event.buttons == 3){

        //for shading and lighting https://stackoverflow.com/questions/58511950/javascript-etch-a-sketch-shading-pen-stops-increasing-opacity-after-another-pen
        if(previousMode === 'custom'){


            event.target.style.backgroundColor = `${userColorPicker.value}`;

        }
        else if(previousMode === 'lighting'){

            event.target.style.opacity = opacity <= 0 ? "0" : opacity - 0.1 + "";
        }
        else if(previousMode === 'shading'){

            event.target.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
        }
        else if(previousMode === 'grabber'){
            
            RGBColor = event.target.style.backgroundColor;
            HexColor = RGBtoHex(RGBColor);
            userColorPicker.value = HexColor;
            grabberToggle = true;
            previousMode = 'custom';
        }
        else if(previousMode === 'erase'){

            event.target.style.backgroundColor = "rgb(255, 255, 255)"
            event.target.style.opacity = "1";
        }
        else if(previousMode === 'rainbow'){

            event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            event.target.style.opacity = "1";
        }
        else if(previousMode === 'black'){

            event.target.style.backgroundColor = "rgb(0, 0, 0)";
            event.target.style.opacity = "1";
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

        div.style.backgroundColor = "rgb(255,255,255)";

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