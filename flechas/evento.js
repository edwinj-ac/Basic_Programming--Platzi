var teclas = {
    UP: 38,
    DOWN: 40, 
    LEFT: 37, 
    RIGHT: 39
};


document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, xfinal, yinicial, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,xfinal);
    lienzo.lineTo(yinicial, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento){
    var color_linea = "blue";
    var movimiento = 10;

    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(color_linea, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(color_linea, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(color_linea, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(color_linea, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            console.log("Otra tecla");
    }
}
