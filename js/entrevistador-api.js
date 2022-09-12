//Entrevistador tabla

var data = [];

//Llamado API
fetch('https://swapi.py4e.com/api/people/')
    .then(response => response.json()) 
    .then(json => {
        console.log(json);
        data = json.results;
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
        item.name.toLowerCase().includes(searchString) ||
        item.birth_year.toLowerCase().includes(searchString) ||
        item.created.toLowerCase().includes(searchString) ||
        item.gender.toLowerCase().includes(searchString)
    ));
    buildTable(filterData);
}

function buildTable (tableData){
    var temp = "";
    document.getElementById("data").innerHTML = "";
    tableData.forEach((item) => {
        temp += "<tr>";
        temp += "<td>" + item.name + "</td>";
        temp += "<td>" + item.birth_year + "</td>";
        temp += "<td>" + item.created + "</td>";
        temp += "<td>" + item.gender + "</td>";
        temp += "<td><a class='btn-table'> <img src='/img/eye.png' width='18px' style='vertical-align: sub;'> <span class='hide-mobile'>&nbsp;Ver perfil </span></a></td>";
        temp += "</tr>";
    });
    document.getElementById("data").innerHTML += temp;
}