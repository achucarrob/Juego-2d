const canvas = document.getElementById("canvas"); // Hacemos referencia a el espacio de canvas en nuestro html

window.addEventListener('load', startGame);
// escuchar el evento resize y ejecutar la funcion
window.addEventListener('resize', canvasResponsive)

function startGame(){
    // window.innerWidth
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d"); // llenamos el espacio vacio en canvas con el tipo de contexto en este caso 2d
        // drawing code here
        ctx.fillRect(25, 25, 100, 100); // un rectangulo :)
      } else {
        // canvas-unsupported code here
      };
};

// Funcion que obtiene las dimensiones de la ventana
function canvasResponsive(){
  let windowWidth = window.innerWidth * 0.75;
  let windowHeight = window.innerHeight * 0.80;

  canvas.setAttribute('width', windowWidth)
  canvas.setAttribute('height', windowHeight)
}
