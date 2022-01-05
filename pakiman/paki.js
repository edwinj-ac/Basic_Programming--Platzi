var imagenes = []

imagenes["Cauchin"] = "vaca.png";
imagenes["Pockacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = []
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pockacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(p in coleccion){
    coleccion[p].mostrar();
}