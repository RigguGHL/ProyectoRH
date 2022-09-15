let formularioRH = document.querySelector('#form-rh');
let nombreForm = document.querySelector('#nombre');
let posicionForm = document.querySelector('#posicion');
let entrevistadorForm = document.querySelector('#entrevistador');
let fechaForm = document.querySelector('#fecha');

formularioRH.addEventListener('submit', function(evento){
    evento.preventDefault();
    let data =[];
    fetch('http://localhost:3000/candidatos',{
        method: "POST",
            headers:{
                "Content-type":"application/json; charset=utf-8"
            },
            body: JSON.stringify({
                nombre: nombreForm.value,
                posicion: posicionForm.value,
                entrevistador: entrevistadorForm.value,
                fechaEntrevista: fechaForm.value,
                estatus:"Por revisar"
            })
    })
        .then(res => res.json())
        .then (json => {
            data = json;
            buildTable(data);
        })
    alert('Datos guardados correctamente');
    document.location.assign('../pages/tabla-RH.html');
    })

function buildTable (tableData){
    var temp = "";
    //document.getElementById("data").innerHTML = "";
    tableData.forEach((item) => {
        temp += "<tr>";
        temp += "<td>" + item.nombre + "</td>";
        temp += "<td class='hide-mobile'>" + item.posicion + "</td>";
        temp += "<td class='hide-mobile'>" + item.entrevistador + "</td>";
        temp += "<td>" + item.estatus + "</td>";
        temp += "<td class='hide-mobile'>" + item.fechaEntrevista + "</td>";
        temp += "<td><a class='btn-delete'> <img src='/img/delete.png' width='18px' style='vertical-align: sub;'> <span class='hide-mobile'></span></a></td>";
        temp += "</tr>";
    });
    document.getElementById("data").innerHTML += temp;
}