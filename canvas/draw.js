var texto = document.getElementById("text_lineas");
var boton = document.getElementById("boton_txt");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, xfinal, yinicial, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,xfinal);
    lienzo.lineTo(yinicial, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    
    var x = parseInt(texto.value);
    
    var lineas = x;
    var l = 0;
    var color_lineas="#AAF";
    var yi, xf;
    var espacio = ancho/lineas;

    for(l=0;l < lineas;l++){
        yi = l*espacio;
        xf = espacio*(l+1);

        dibujarLinea(color_lineas, 0, xf, yi, 300);
        dibujarLinea(color_lineas, xf, 0, 300, yi);
    }

    dibujarLinea(color_lineas, 1, 1, 1, 299);
    dibujarLinea(color_lineas, 1, 299, 299, 299);
}