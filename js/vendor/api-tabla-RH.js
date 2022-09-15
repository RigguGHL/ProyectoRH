//Entrevistador tabla

var data = [];

//Llamado API

fetch('http://localhost:3000/candidatos')
    .then(response => response.json()) 
    .then(json => {
        console.log(json);
        data = json;
        buildTable(data);
        if(localStorage.getItem('nombre') === null){

        }
        else {buildTableForm();}
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
        item.entrevistador.toLowerCase().includes(searchString) ||
        item.estatus.toLowerCase().includes(searchString) ||
        item.fechaEntrevista.toLowerCase().includes(searchString)
    ));
    buildTable(filterData);
}

function buildTable (tableData){
    var temp = "";
    document.getElementById("data").innerHTML = "";
    tableData.forEach((item) => {
        temp += "<tr>";
        temp += "<td>" + item.nombre + "</td>";
        temp += "<td class='hide-mobile'>" + item.posicion + "</td>";
        temp += "<td class='hide-mobile'>" + item.entrevistador + "</td>";
        temp += "<td>" + item.estatus + "</td>";
        temp += "<td class='hide-mobile'>" + item.fechaEntrevista + "</td>";
        temp += "<td><a onclick=deleteRegister("+item.id+") class='btn-delete' data-id="+item.id+"> <img src='/img/delete.png' width='18px' style='vertical-align: sub;'> <span class='hide-mobile'></span></a></td>";
        temp += "</tr>";
    });
    document.getElementById("data").innerHTML += temp;
}

//Elimina un registro
function deleteRegister(id){
    console.log(id);
    alert(`¿Deseas eliminar el registro?`);
        fetch(`http://localhost:3000/candidatos/${id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(buildTable(data))
        .then(document.location.assign('../pages/tabla-RH.html'))
        
        //Esto usando localStorage 
        //let fila = document.querySelector('#data-form');
        //fila.deleteRow(0);
        //localStorage.clear();
    }

//Esta funcion sirve para local storage 
/*function buildTableForm (){
    var temp = "";
    document.getElementById("data-form").innerHTML = "";
        temp += "<tr>";
        temp += "<td>" + localStorage.getItem('nombre') + "</td>";
        temp += "<td class='hide-mobile'>" + localStorage.getItem('posicion') + "</td>";
        temp += "<td class='hide-mobile'>" + localStorage.getItem('entrevistador') + "</td>";
        temp += "<td class='hide-mobile'>" + " " + "</td>";
        temp += "<td>" + localStorage.getItem('fecha') + "</td>";
        temp += "<td><a deleteRegister() class='btn-delete data-id=${item.id}'> <img src='/img/delete.png' width='18px' style='vertical-align: sub;'> <span class='hide-mobile'></span></a></td>";
        temp += "</tr>";
        document.getElementById("data-form").innerHTML += temp;
}*/