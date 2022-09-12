let correo = document.querySelector('#email');

let password = document.querySelector('#password');

let formulario = document.querySelector('#formulario');


let error = document.querySelector('#error');
//error.style.color = 'white';

//Validación de campos que no estén vacíos
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let mensajesError = [];

    if(correo.value === null || correo.value === ''){
        mensajesError.push('Ingresa un correo válido');
    }
    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa una contraseña válida');
    }
    else{
        if(correo.value === 'alan@bbva.com' && password.value === 'alan069813')
        {
            document.location.assign('../pages/tabla-RH.html');
            mensajesError.clean();
        }
        if(correo.value === 'jorge@bbva.com' && password.value === 'jorge1234'){
            document.location.assign('../pages/tabla-entrevistador.html');
            mensajesError.clean();
        }
        if(correo.value === 'set@bbva.com' && password.value === 'set069813'){
            document.location.assign('../pages/tabla-su-main.html');
            mensajesError.clean();
        }
        else{
            mensajesError.push('Usuario incorrecto, intenta de nuevo :)')
        }
    }
    error.innerHTML = mensajesError.join(', ');
})