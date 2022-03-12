let attempts = 0;

const container = document.querySelector('.container');



function createPad(){

    for(let i = 0; i < 16; i++){

        const div = document.createElement('div');

        div.style.height ="100px";

        div.style.width = "100px";

        div.style.backgroundColor = "yellow";

        div.style.border = "1px solid black"

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "white";
        })
        

        if(i != 0){

            div.style.cssFloat = "clear"
            container.appendChild(div);
        }

    for(let j = 0; j < 16; j++){

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

createPad();