// //* consumir la api de Rick and Morty

// // prompt para ingresar valores del usuario
// //var nombreUS = prompt("ingresa tu nombre");


// // Alert para mostrar mensaje al usuario
// // alert(nombreUS + " Bienvenido a la api de Rick and Morty");

// var numero = parseInt(
//     prompt("ingresa un numero"
//     )
// ); // convierte un string a un numero entero
// var numero2 = parseInt(
//     prompt("ingresa otro numero"
//     )
// ); // convierte un string a un numero entero

// var suma = numero + numero2;
// alert("la suma de los numeros es: " + suma);

// //parseInt("1");  // convierte un string a un numero entero

// personajes(mostrarDatos);
// function personajes(done) {

//     const url = 'https://rickandmortyapi.com/api/character';

//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => done(data))
//         .catch(error => console.log(error))
//         .finally(() => console.log('finalizo'));
// }

// const mostrarPersonajes = (resultados) => {
//     console.log(data.resultados);
//     const results = data.results;
//     const section = document.querySelector('.section');
//     let html = '';
//     results.forEach(element => {
//         html += `
//         <div class="card">
//         <img src="${element.image}" alt="${element.name}">
//         <h2>${element.name}</h2>
//         <p>${element.species}</p>
//         </div>
//         `
//     });
//     section.innerHTML = html;
// }


// url referencia a la Api 
const url = 'https://rickandmortyapi.com/api/character';
const url2 = 'https://hp-api.onrender.com/api/characters'
const url3 = 'https://www.etnassoft.com/api/v1/get/?id=589'

// fetch para consumir la api
async function personajes() {
  const resp = await fetch(url2);
  const data = await resp.json();
  return data;
}


const resp = personajes();

// const results = resp.results;    

//console.log(resp)



// const getPersonajes = async () => {


//     const personajes = await results.map(
//         (personaje) => {
//             return {
//                 id: personaje.id,
//                 nombre: personaje.name,
//                 casa: personaje.house
//             }
//         }
//     )

//     console.log(personajes);
//     return personajes;
// }

setTimeout(async () => {
  //console.log(await { resp });
}, 2000);

async function mostrarDatos(resp) {


  const data = await resp;

  const persinajesInfo = await data.filter(
    (personaje) => {
      return personaje.image != "";
    }
  )

  console.log(persinajesInfo);


  const section = document.querySelector('.section');
  let html = '';
  await persinajesInfo.forEach(element => {
    html += `
        <div class="card" style="width: 18rem;">
        <img src=${element.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${element.ancestry}</li>
          <li class="list-group-item">${element.species}</li>
          <li class="list-group-item">${element.eyeColour}</li>
        </ul>
      </div>
        `
  });
  section.innerHTML = html;
}

mostrarDatos(resp);




