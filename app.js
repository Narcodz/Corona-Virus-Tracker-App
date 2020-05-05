window.onload = function () {
    getCovidStats();
}

function getCovidStats() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries/')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            for (var key in data) {
                // console.log(key);
                // console.log(data[key]);
                var dataForSL;
                if (data[key].country == "Sri Lanka") {
                    dataForSL = data[key];
                    console.log(dataForSL)
                }
            }

            console.log(dataForSL.cases);
            let srilanka = dataForSL.country;
            let confirmedCases = dataForSL.cases;
            let todayCases = dataForSL.todayCases;
            let recoveredCases = dataForSL.recovered;        
            let deaths = dataForSL.deaths;
            let todaydeaths = dataForSL.todayDeaths;
            

            document.getElementById('srilanka').innerHTML = srilanka.toLocaleString('en');
            document.getElementById('confirmedCases').innerHTML = confirmedCases.toLocaleString('en');
            document.getElementById('todayCases').innerHTML = todayCases.toLocaleString('en');
            document.getElementById('recoveredCases').innerHTML = recoveredCases.toLocaleString('en');           
            document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
            document.getElementById('todaydeaths').innerHTML = todaydeaths.toLocaleString('en');
            document.getElementById('percent').innerHTML = ((Number(deaths) / Number(confirmedCases)) * 100).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
            // console.log(item.country);
        })
        .catch(function () {
            console.log("Error");
        })

    fetch('https://coronavirus-19-api.herokuapp.com/all')
        .then(function (resp1) { return resp1.json() })
        .then(function (data1) {
            let confirmedCasesWorld = data1.cases;
            let deathCasesWorld = data1.deaths;
            let recoveredCasesWorld = data1.recovered;

            document.getElementById('confirmedCasesWorld').innerHTML = confirmedCasesWorld.toLocaleString('en');
            document.getElementById('recoveredCasesWorld').innerHTML = recoveredCasesWorld.toLocaleString('en');
            document.getElementById('deathCasesWorld').innerHTML = deathCasesWorld.toLocaleString('en');
            console.log(data1);
        })
        .catch(function () {
            console.log("Error");
        })

    setTimeout(getCovidStats, 21600000)
}

