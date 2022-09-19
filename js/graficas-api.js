//Graficos
//Llamado API
fetch('http://localhost:3000/candidatos')
    .then(response => response.json()) 
    .then(json => {
        console.log(json);
        const data = json;
    
        const countPos = 
        data.reduce((accumulator, object) => {
        if(objectFound = accumulator.find(arrItem => arrItem.posicion === object.posicion)) {
            objectFound.times++;
        } else {
            object.times = 1;
            accumulator.push({posicion:object.posicion, times:object.times});
        }
        return accumulator;
        }, []);

        const countEst = 
        data.reduce((accumulator, object) => {
        if(objectFound = accumulator.find(arrItem => arrItem.estatus.toLowerCase() === object.estatus.toLowerCase())) {
            objectFound.times++;
        } else {
            object.times = 1;
            accumulator.push({estatus:object.estatus, times:object.times});
        }
        return accumulator;
        }, []);
        
        console.log(countPos, countEst);
    
        var optionsDonut = {
            chart: {
                type: 'pie'
            },
            series: countPos.map(a => a.times),
            labels: countPos.map(a => a.posicion)
        }
        
        var optionsBar = {
            chart: {
              type: 'bar'
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            series: [{
              data: countEst.map(a => {return {x:a.estatus, y:a.times}})
            }]
          }
        
        var chartDonut = new ApexCharts(document.querySelector("#chartDonut"), optionsDonut);
        var chartBar = new ApexCharts(document.querySelector("#chartBar"), optionsBar);
        
        chartBar.render();
        chartDonut.render();
        
    }) 
    .catch(err => {
        console.log('Solicitud fallida', err);
        const data = [
            {
              "id": 1,
              "nombre": "Antonio Josue Rodriguez Barrera",
              "posicion": "Analista",
              "entrevistador": "Gordon Moore",
              "estatus": "Por Revisar",
              "fechaEntrevista": "2022-06-22"
            },
            {
              "id": 3,
              "nombre": "Adam Perez Ramires",
              "posicion": "Desarrollador Frontend",
              "entrevistador": "Alberto del Rio",
              "estatus": "Por revisar",
              "fechaEntrevista": "2022-06-25"
            },
            {
              "id": 4,
              "nombre": "Edson Alvares",
              "posicion": "Fullstack Developer",
              "entrevistador": "Jesus Rodriguez",
              "estatus": "Por revisar",
              "fechaEntrevista": "2022-06-29"
            },
            {
              "id": 4,
              "nombre": "Edson Alvares",
              "posicion": "Fullstack Developer",
              "entrevistador": "Jesus Rodriguez",
              "estatus": "Por revisar",
              "fechaEntrevista": "2022-06-29"
            }
          ];
    
        const countPos = 
        data.reduce((accumulator, object) => {
        if(objectFound = accumulator.find(arrItem => arrItem.posicion === object.posicion)) {
            objectFound.times++;
        } else {
            object.times = 1;
            accumulator.push({posicion:object.posicion, times:object.times});
        }
        return accumulator;
        }, []);

        const countEst = 
        data.reduce((accumulator, object) => {
        if(objectFound = accumulator.find(arrItem => arrItem.estatus.toLowerCase() === object.estatus.toLowerCase())) {
            objectFound.times++;
        } else {
            object.times = 1;
            accumulator.push({estatus:object.estatus, times:object.times});
        }
        return accumulator;
        }, []);
        
        console.log(countPos, countEst);
    
        var optionsDonut = {
            chart: {
                type: 'pie'
            },
            series: countPos.map(a => a.times),
            labels: countPos.map(a => a.posicion)
        }
        
        var optionsBar = {
            chart: {
              type: 'bar'
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            series: [{
              data: countEst.map(a => {return {x:a.estatus, y:a.times}})
            }]
          }
        
        var chartDonut = new ApexCharts(document.querySelector("#chartDonut"), optionsDonut);
        var chartBar = new ApexCharts(document.querySelector("#chartBar"), optionsBar);
        
        chartBar.render();
        chartDonut.render();
    }); 

    