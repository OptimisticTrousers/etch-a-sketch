
const container = document.querySelector('.container');

const clearButton = document.querySelector('.clear');
const eraseButton = document.querySelector('.erase');
const rainbowButton = document.querySelector('.rainbow');
const blackButton = document.querySelector('.black-and-white');
const lightingButton = document.querySelector('.lighting')
const shadingButton = document.querySelector('.shading');
const grabberButton = document.querySelector('.color-grabber');

const slider = document.getElementById('slider');

const userColorPicker = document.getElementById('picker')
const backgroundColorPicker = document.getElementById('background-picker')

let screenWidth = 542;
let screenHeight = 542;

const mediaQuery = window.matchMedia('(max-width: 890px)');

let previousGridSize = 16;
let previousMode = "black";

let RGBColor = ""
let backgroundColor = ""

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

lightingButton.addEventListener('click', () => {

    previousMode = "lighting";
    clearButtonStyle();
    lightingButton.classList.add('is-active');
})

shadingButton.addEventListener('click', () => {

    previousMode = "shading";
    clearButtonStyle();
    shadingButton.classList.add('is-active');
})

grabberButton.addEventListener('click', () => {

    previousMode = 'grabber';
    clearButtonStyle();
    grabberButton.classList.add('is-active');

})

eraseButton.addEventListener('click' ,() => {

    previousMode = 'erase';
    clearButtonStyle();
    eraseButton.classList.add('is-active');
    
}) 

blackButton.addEventListener('click', () => {

    previousMode = 'black';
    clearButtonStyle();
    blackButton.classList.add('is-active');
})

rainbowButton.addEventListener('click', () => {

    previousMode = 'rainbow'
    clearButtonStyle();
    rainbowButton.classList.add('is-active');
})

clearButton.addEventListener('click', () => {

    clearPad();
    createPad(previousGridSize);
});

slider.addEventListener('mouseup', () => {

    let sliderOutput = document.querySelector('output').value;

    clearPad();
    createPad(sliderOutput);
})


function getBackgroundColor(event){

    backgroundColor = event.target.value;

    container.style.backgroundColor = `${backgroundColor}`;
}

function clearButtonStyle(){

    const buttonNodeList = document.querySelectorAll('button')

    for(const button of buttonNodeList){

        button.classList.remove('is-active');
    }
}

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

function changeDivColor(event){

    const randomRed = (Math.random() * 256)

    const randomGreen = (Math.random() * 256) 

    const randomBlue = (Math.random() * 256)

    let opacity = Number(event.target.style.opacity);

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