var jf= require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", encender);

function encender(){
    var led_Rojo = new jf.Led(9);
    var led_Amarillo = new jf.Led(13);

    led_Rojo.blink(100);
    led_Amarillo.blink(700);
}