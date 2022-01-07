var jf= require("johnny-five");
var circuito = new jf.Board();
var led, servo, foto_res;

circuito.on("ready", encender);

function encender(){

    var configuracion = {pin:"A0", freq:50}
    foto_res = new jf.Sensor(configuracion);

    led = new jf.Led(13);
    led.on();
    
    servo = new jf.Servo(9);
    servo.to(90);

    regar();
    
}

function regar(){
    console.log("Luz: " + foto_res.value);
    
    var luz = foto_res.value;
    if(luz > 800){
        servo.to(90);
    }else{
        servo.to(160);
    }

    setTimeout(regar, 1000);
}