document.addEventListener( )


let formularioRH = document.querySelector('#form-rh');
let nombreForm = document.querySelector('#nombre');
let posicionForm = document.querySelector('#posicion');
let entrevistadorForm = document.querySelector('#entrevistador');
let fechaForm = document.querySelector('#fecha');


formularioRH.addEventListener('submit', function(evento){
    evento.preventDefault();

    localStorage.setItem('nombre', nombreForm.value);
    localStorage.setItem('posicion', posicionForm.value);
    localStorage.setItem('entrevistador', entrevistadorForm.value);
    localStorage.setItem('fecha', fechaForm.value.toString());

    alert('Datos guardados correctamente :)');
});