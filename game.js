const canvas = document.getElementById("canvas"); // Hacemos referencia a el espacio de canvas en nuestro html
const ctx = canvas.getContext("2d");


window.addEventListener('load', canvasResponsive);
// escuchar el evento resize y ejecutar la funcion
window.addEventListener('resize', canvasResponsive)
//  let windowWidth = window.innerWidth ;
//  let windowHeight = window.innerHeight ;

let canvasSize;
let elementsSize;


//Funcion que obtiene las dimensiones de la ventana
function canvasResponsive(){
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8 ;
  };
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  // canvas.setAttribute('width', windowWidth * 0.75);
  // canvas.setAttribute('height', windowHeight * 0.80);

  startGame()
};

function startGame(){
    elementsSize = canvasSize / 10;
    console.log({canvasSize, elementsSize});
    ctx.font = elementsSize + 'px AriL';
    ctx.textAlign = 'end';

    for (let i = 0; i <= 10; i++){
      //ctx.fillText(emojis['X'], 1 , elementsSizeVertical * i);
      ctx.fillText(emojis['X'], elementsSize * i, elementsSize);
    };
};