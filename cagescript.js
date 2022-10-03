class Pelicula{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    mostrarPelicula(){
        console.log("Nombre: "+this.nombre+" Precio: "+this.precio);
    }
    actualizarCarrito(){
        carrito=carrito+Pelicula.precio;
    }
}
const peli1 = new Pelicula ("Adaptation", 200);
const peli2 = new Pelicula ("Pig", 200);
const peli3 = new Pelicula ("Next", 100);
const peli4 = new Pelicula ("The Rock", 150);

let carrito=0;

function alquilar(){
    do{
        peli1.nombre = prompt("Ingrese el nombre de la pelicula que desee alquilar\n 2 - Para salir");
        if(peli1.nombre!="2"){
        console.log("Se agrego "+peli1.nombre+" al carrito");
        carrito=carrito+peli1.precio;
        console.log("Total $"+carrito);
        }else{
            alert("Gracias, vuelva prontos!");
            break;
        }
    }
    while(Pelicula.nombre!="2")

}

let pregunta=parseInt(prompt("Ingrese\n 1 - Para alquilar una pelicula\n 2 - Para salir"));
if(pregunta=="1"){
    alquilar();
}else{
    alert("Gracias, vuelva prontos!");
}


