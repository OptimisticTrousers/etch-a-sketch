let attempts = 0;

const container = document.querySelector('.container');

const clearButton = document.querySelector('.clear');

const screenWidth = 500;

const screenHeight = 500;

function clearPad(parent){

clearButton.addEventListener('click', () => {

    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }

    createPad(userPrompt());
})

}

function userPrompt(){
    let userInput = prompt("How large do you want your grid to be? eg. 100 = 100x100 grid, 50 = 50x50 grid: ")

    let number = parseInt(userInput);

    if(number > 100){
        alert("Sorry. Max number is 100!");

        return userPrompt();
    }

    return number;
}

function createPad(gridSize){

    for(let i = 0; i < gridSize; i++){

        const div = document.createElement('div');

        let userHasHovered = false;

        div.style.height = `${screenHeight/gridSize}px`;

        div.style.width = `${screenWidth/gridSize}px`;

        div.style.backgroundColor = "white";

        div.addEventListener('mouseover', () => {
            

            if(userHasHovered != true){

                div.style.backgroundColor = "white"
                userHasHovered = true;

            }

            else{
                div.style.filter = "brightness(90%)";
            }

        })

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

        div.addEventListener('mousedown', () => {

            let count = 9;

            if(count == 9){

                div.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

                count--;
            }
            else if(count == 0){
                return
            }
            else{

                div.style.filter = `brightness(${count}0%)`;

            }
        })

        container.appendChild(div);

        }

    }

}

createPad(16);

clearPad(container);