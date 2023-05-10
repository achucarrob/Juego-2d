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
  ctx.font = elementsSize + 'px Verdana';
  ctx.textAlign = 'end';

  // split method to separate a given string by the paramet given between () into arrays
  // metodo .trim limpia los espacios de un string ubicados al principio o al final
  const map = maps[2] // traemos los mapas, vienen como string hay que convertirlos a arrays con .split
  const firstsplit = map.trim().split('\n'); // crear un array por cada salto de linea \n
  const secondsplit = firstsplit.map(fila => fila.trim().split('')) // crea un array de los array anteriores (array multidimensinal) y separa cada string como un elemento
  console.log(firstsplit,secondsplit)


  // recorrer el arreglo secondsplit
  // El método forEach() ejecuta la función indicada una vez por cada elemento del array.
  secondsplit.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1);
      const posY = elementsSize * (rowI + 1);
      ctx.fillText(emoji, posX, posY);
    });
  });

  // for (let row = 1; row <= 10; row++){
  //   for (let col = 1; col <= 10; col++){
  //   ctx.fillText(emojis[secondsplit[row - 1][col - 1]], elementsSize * row , elementsSize * col);
  //   }
  // };
};
