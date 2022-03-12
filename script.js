let attempts = 0;

const container = document.querySelector('.container');


container.style["background-color"] = "yellow";

container.appendChild('div');

function createPad(){

    for(let i = 0; i < 16; i++){


        let div = document.createElement('div');

        container.appendChild(div);

    }
}

createPad();