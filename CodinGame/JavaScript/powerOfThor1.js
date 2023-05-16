var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]);
const lightY = parseInt(inputs[1]);
const initialTx = parseInt(inputs[2]);
const initialTy = parseInt(inputs[3]);

let atualX = initialTx;
let atualY = initialTy;

const straightMove = () => {
    if (initialTx == lightX && initialTy != lightY){
        if (initialTy > lightY){
            atualY--;
            console.log('N');
        }
        else{
            atualY++;
            console.log('S');
        }
    }
    else if (initialTx != lightX && initialTy == lightY){
        if (initialTx > lightX){
            atualX--;
            console.log('W');
        }
        else{
            atualX++;
            console.log('E');
        }
    }
}

while (true) {
    const remainingTurns = parseInt(readline());

    straightMove();

    if (atualY == 17)
        atualX > lightX ? console.log('W') : console.log('E');
    else if (atualX == 36)
        atualY > lightY ? console.log('N') : console.log('S');
    else if (lightX == 0 && initialTx > 0 && initialTy < lightY){
        atualX--;
        atualY++;
        console.log('SW');
    }
    else if (lightX == 36 && initialTx < 36 && initialTy < lightY){
        atualX--;
        atualY++;
        console.log('SE');
    }
}
