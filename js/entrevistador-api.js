//Entrevistador tabla

var data = [];

//Llamado API
fetch('http://localhost:3000/tablaEntrevistadorAndSu')
    .then(response => response.json()) 
    .then(json => {
        console.log(json);
        data = json;
        buildTable(data);
    }) 
    .catch(err => console.log('Solicitud fallida', err)); 

//Functions
function sort(property, element){
    let sortedData = data;
    if (element.firstElementChild.classList.contains('toggle-up')){
        element.firstElementChild.classList.replace('toggle-up', 'toggle-down');
        sortedData.sort((a,b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
    }
    else {
        element.firstElementChild.classList.replace('toggle-down', 'toggle-up');
        sortedData.sort((a,b) => (b[property] > a[property]) ? 1 : ((a[property] > b[property]) ? -1 : 0));
    }
    buildTable(sortedData);
}

function search(element) {
    const searchString = element.value.toLowerCase();
    const filterData = data.filter(item => (
        item.nombre.toLowerCase().includes(searchString) ||
        item.posicion.toLowerCase().includes(searchString) ||
        item.fechaRegistro.toLowerCase().includes(searchString) ||
        item.estatus.toLowerCase().includes(searchString)
    ));
    buildTable(filterData);
}

function buildTable (tableData){
    var temp = "";
    document.getElementById("data").innerHTML = "";
    tableData.forEach((item) => {
        temp += "<tr>";
        temp += "<td>" + item.nombre + "</td>";
        temp += "<td>" + item.posicion + "</td>";
        temp += "<td class='hide-mobile'>" + item.fechaRegistro + "</td>";
        temp += "<td class='hide-mobile'>" + item.estatus + "</td>";
        temp += "<td><a onclick = 'botonDinamico()' class='btn-table' href='../pages/formulario-Entrevistador.html?nombre="+ item.nombre +"&puesto="+item.posicion+"'> <img src='/img/eye.png' width='18px' style='vertical-align: sub;'> <span id='texto' class='hide-mobile'>&nbsp;Ver perfil </span></a></td>";
        temp += "</tr>";
    });
    document.getElementById("data").innerHTML += temp;
}

/*
function botonDinamico(){
    let botonVerImg = document.querySelector('.btn-table img');
    let botonVerText = document.querySelector('#texto')
    console.log(botonVerImg);
    console.log(botonVerText);
    botonVerImg.src = '../img/lapiz.png';
    botonVerText.textContent = 'Editar';
    }
*/