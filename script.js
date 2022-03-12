let attempts = 0;

const container = document.querySelector('.container');

const clearButton = document.querySelector('.clear');

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

    return number;
}

function createPad(gridSize){

    for(let i = 0; i < gridSize; i++){

        const div = document.createElement('div');

        let userHasHovered = false;

        div.style.height = `${screen.width/i}`;

        div.style.width = "100px";

        div.style.backgroundColor = "yellow";

        div.style.border = "1px solid black"

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

        div.style.height ="100px";

        div.style.width = "100px";

        div.style.backgroundColor = "yellow";

        div.style.border = "1px solid black"

        div.style.cssFloat = "left"

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "white";
        })

        container.appendChild(div);

        }

    }

}

createPad(16);

clearPad(container);