let carrito = [];
let items = document.getElementById("items");
let total = document.getElementById("total");

let articuloPeliculasBuenas = document.getElementById("pelisBuenas");
function renderizarPelisBuenas(){
for(const pelicula of peliculasBuenas){
    let poster = document.createElement("div");
    poster.className="card col-md-2 bg-dark m-1";
    poster.innerHTML = `
        <div class="card-body">
        <img src=${pelicula.foto} class="card-img-top" alt=${pelicula.nombre}>
            <h5 class="card-title">${pelicula.nombre}</h5>
            <p class="card-text">$ ${pelicula.precio}</p>
            <button id="btn${pelicula.id}" class="btn btn-danger">Comprar</button>
        </div>
    `;
    articuloPeliculasBuenas.append(poster);
}
    peliculasBuenas.forEach((pelicula) => {
        document.getElementById(`btn${pelicula.id}`).onclick = () => {
            agregarAlCarrito(pelicula);
        };
    })
}
renderizarPelisBuenas();

let articuloPeliculasMalas = document.getElementById("pelisMalas");
function renderizarPelisMalas(){
for(const pelicula of peliculasMalas){
    let poster = document.createElement("div");
    poster.className="card col-md-2 bg-dark m-1";
    poster.innerHTML = `
        <div class="card-body">
        <img src=${pelicula.foto} class="card-img-top" alt=${pelicula.nombre}>
            <h5 class="card-title">${pelicula.nombre}</h5>
            <p class="card-text">$ ${pelicula.precio}</p>
            <button id="btn${pelicula.id}" class="btn btn-danger">Comprar</button>
        </div>
    `;
    articuloPeliculasMalas.append(poster);
}
    peliculasMalas.forEach((pelicula) => {
        document.getElementById(`btn${pelicula.id}`).onclick = () => {
            agregarAlCarrito(pelicula);
        };
    })
}
renderizarPelisMalas();

let articuloPeliculasFeas = document.getElementById("pelisFeas");
function renderizarPelisFeas(){
for(const pelicula of peliculasFeas){
    let poster = document.createElement("div");
    poster.className="card col-md-2 bg-dark m-1";
    poster.innerHTML = `
        <div class="card-body">
        <img src=${pelicula.foto} class="card-img-top" alt=${pelicula.nombre}>
            <h5 class="card-title">${pelicula.nombre}</h5>
            <p class="card-text">$ ${pelicula.precio}</p>
            <button id="btn${pelicula.id}" class="btn btn-danger">Comprar</button>
        </div>
    `;
    articuloPeliculasFeas.append(poster);
}
    peliculasFeas.forEach((pelicula) => {
        document.getElementById(`btn${pelicula.id}`).onclick = () => {
            agregarAlCarrito(pelicula);
        };
    })
}
renderizarPelisFeas();

function agregarAlCarrito(pelicula){
    carrito.push(pelicula)
    Swal.fire(
        'Producto '+pelicula.nombre,
        'Agregado al carrito!',
        'success'
      );
      items.innerHTML += `
        <tr>
            <td>${pelicula.id}</td>
            <td>${pelicula.nombre}</td>
            <td>${pelicula.precio}</td>
        </tr>
    `;
    let sumador = 0;
    for(const pelicula of carrito){
        sumador += pelicula.precio;
    }
    total.innerText="Total a pagar: $"+sumador;
}