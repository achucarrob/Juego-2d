const canvas = document.getElementById("canvas"); // Hacemos referencia a el espacio de canvas en nuestro html
const ctx = canvas.getContext("2d");


window.addEventListener('load', startGame);
// escuchar el evento resize y ejecutar la funcion
// window.addEventListener('resize', startGame)
//  let windowWidth = window.innerWidth ;
//  let windowHeight = window.innerHeight ;


function startGame(){
    let canvasSize;
    
    if (window.innerHeight > window.innerWidth) {
      canvasSize = window.innerWidth * 0.8;
    } else {
      canvasSize = window.innerHeight * 0.8 ;
    };
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = canvasSize / 10;
    console.log({canvasSize, elementsSize});
    ctx.font = elementsSize + 'px Verdana';
    ctx.textAlign = 'end';

    for (let i = 1; i <= 10; i++){
      //ctx.fillText(emojis['X'], 1 , elementsSizeVertical * i);
      ctx.fillText(emojis['X'], elementsSize * i, elementsSize * i);
    };
    
    // if (canvas.getContext) {
      // const ctx = canvas.getContext("2d"); // llenamos el espacio vacio en canvas con el tipo de contexto en este caso 2d
        // drawing code here
      //   ctx.fillRect(25, 25, 100, 100); // un rectangulo :)
      // } else {
        // canvas-unsupported code here
      // };
};

// Funcion que obtiene las dimensiones de la ventana
// function canvasResponsive(){
//   canvas.setAttribute('width', windowWidth * 0.75);
//   canvas.setAttribute('height', windowHeight * 0.80);
// };
