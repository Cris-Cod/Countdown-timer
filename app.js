const formulario = document.querySelector('#formulario');
let tituloEvento = document.querySelector('#evento');
let fechaEvento = document.querySelector('#fecha');
let nombreEvento = document.querySelector('.nombre-evento');
let dias = document.querySelector('#dias');
let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');


formulario.addEventListener('submit', validar);

function validar(e) {
    e.preventDefault();

    if (tituloEvento.value === "" || fechaEvento.value === "") {
        alert("Todos los campos deben estar llenos");
    } else {

        nombreEvento.innerHTML = `<h2>${tituloEvento.value}</h2>`;

        const texto = document.createElement('p');
        texto.textContent = "Inicia en:";
        texto.classList.add('inicia');
        let empieza = document.querySelector('.start');
        empieza.appendChild(texto);

        countdonw();


    }
}

function countdonw() {





    let fechaAhora = new Date();
    let fechaIngresada = new Date(fechaEvento.value);

    let fechaResultado = (fechaIngresada - fechaAhora) / 1000;

    let daysDate = Math.floor(fechaResultado / 3600 / 24);
    let horasDate = Math.floor(fechaResultado / 3600) % 24;
    let minutosDate = Math.floor(fechaResultado / 60) % 60;
    let minutoSegundos = Math.floor(fechaResultado) % 60;

    dias.innerHTML = daysDate;
    horas.innerHTML = horasDate;
    minutos.innerHTML = minutosDate;
    segundos.innerHTML = minutoSegundos;

    tiempo();

}

function tiempo() {
    setInterval(countdonw, 1000);
}