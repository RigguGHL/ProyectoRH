let formularioSU = document.querySelector('#form-su');
let nombreRh = document.querySelector('#nombreRh');
let fechaRegistro = document.querySelector('#fechaRegistro');
let entrevistador = document.querySelector('#entrevistador1');
let especialidad = document.querySelector('#especialidad');
let experiencia = document.querySelector('#experiencia');
let encargado = document.querySelector('#encargado');
let cv = document.querySelector('#cv');
//let nombreForm =document.querySelector('#nombre');

formularioSU.addEventListener('submit', function(evento){
    evento.preventDefault();
    let data =[];
    fetch('http://localhost:3000/tablaSu',{
        method: "POST",
            headers:{
                "Content-type":"application/json; charset=utf-8"
            },
            body: JSON.stringify({
                nombreRh: nombreRh.value,
                fechaRegistro: fechaRegistro.value,
                nombre: "Ian Rod",
                entrevistador: entrevistador1.value,
                especialidad: especialidad.value,
                experiencia: experiencia.value,
                encargado: encargado.value,
                cv: "cv.pdf"
            })
    })
        .then(res => res.json())
        .then (json => {
            data = json;
            buildTable(data);
        })
    alert('Datos guardados correctamente');
    document.location.assign('../pages/tabla-su-main.html');
    })

function buildTable (tableData){
    var temp = "";
    //document.getElementById("data").innerHTML = "";
    tableData.forEach((item) => {
        temp += "<tr>";
        temp += "<td>" + item.nombreRh + "</td>";
        temp += "<td class='hide-mobile'>" + item.fechaRegistro + "</td>";
        temp += "<td class='hide-mobile'>" + item.nombre + "</td>";
        temp += "<td>" + item.entrevistador + "</td>";
        temp += "<td class='hide-mobile'>" + item.especialidad + "</td>";
        temp += "<td class='hide-mobile'>" + item.experiencia + "</td>";
        temp += "<td class='hide-mobile'>" + item.encargado + "</td>";
        temp += "<td class='hide-mobile'>" + item.cv + "</td>";
        temp += "<td><a class='btn-delete'> <img src='/img/delete.png' width='18px' style='vertical-align: sub;'> <span class='hide-mobile'></span></a></td>";
        temp += "</tr>";
    });
    document.getElementById("data").innerHTML += temp;
}


