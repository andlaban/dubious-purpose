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
const peli2 = new Pelicula ("Next", 100);
const peli3 = new Pelicula ("The Rock", 150);

let carrito=0;

let peliculas;
function alquilar(){
do{
    peliculas = prompt("Que pelicula desea alquilar? \n 1 - Adaptation\n 2 - Next\n 3 - The Rock\n 4 - Para salir");
    if(peliculas!="4"){
        switch(peliculas){
            case "1":
                console.log("Se agrego "+peli1.nombre+" al carrito");
                carrito=carrito+peli1.precio;
                console.log("Total $"+carrito);
                break;
            case "2":
                console.log("Se agrego "+peli2.nombre+" al carrito");
                carrito=carrito+peli2.precio;
                console.log("Total $"+carrito);
                break;
            case "3":
                console.log("Se agrego "+peli3.nombre+" al carrito");
                carrito=carrito+peli3.precio;
                console.log("Total $"+carrito);
                break;
        }
    }else{
        alert("Gracias, vuelva prontos!");
        break;
    }
}while(peliculas!="4")
}

let pregunta=parseInt(prompt("Ingrese\n 1 - Para alquilar una pelicula\n 2 - Para salir"));
if(pregunta=="1"){
    alquilar();
}else{
    alert("Gracias, vuelva prontos!");
}


