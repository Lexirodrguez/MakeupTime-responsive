// Función para la tabla de Formulario

import './style.css';
const formulario = document.getElementById('formulariosuscripcion');
const tabla = document.getElementById("bodytabla");

//Procesamiento de datos
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

//Se guarda en el localStorage
    const lista = JSON.parse(localStorage.getItem('suscriptores')) || [];
    lista.push({ nombre, correo });
    localStorage.setItem('suscriptores', JSON.stringify(lista));

//Se ingresan a la tabla de Usuarios Suscritos
    tabla.innerHTML += `<tr><td>${nombre}</td><td>${correo}</td></tr>`;
});