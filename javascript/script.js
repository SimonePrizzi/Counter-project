document.head.firstElementChild.innerHTML = 'Counter';

document.body.innerHTML = "<h1>Buon divertimento!</h1>"

let counter = 0;

let divDisplay = document.createElement('div');
divDisplay.className = "display";
divDisplay.innerHTML = counter;


let divButton = document.createElement('div');
divButton.className = "button";
divButton.innerHTML = "<button> + </button><button> - </button>";


document.body.append(divDisplay);
document.body.append(divButton);


function buttonPlus() {
    counter ++;
    divDisplay.innerHTML = counter;
  };

  function buttonMinus() {
      counter --;
    divDisplay.innerHTML = counter;
  };


divButton.firstElementChild.addEventListener('click', buttonPlus);
divButton.lastElementChild.addEventListener('click', buttonMinus);

if (counter == 0 ) {
    alert ('Premi + per incrementare il conteggio e - per decrementarlo.');
}





