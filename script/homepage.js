let tableDisplay = document.querySelector(".tableView");
fetch("../json/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        createTable(data);
    });

const createTable = data => {
    const tableEntries = data.map(
        value =>
            `<tr class="body"><td>${value.id}</td><td>${value.city}</td><td>${value.phone}</td><td>${value.state}</td><td>${value.country}</td></tr>`
    );
    const definition = `<table class="searchTable" border="4" width="80%"> <tr class="heading"> <th>ID</th> <th>City</th> <th>Phone</th> <th>State</th>
                      <th>Country</th> </tr> ${tableEntries.join("")} </table>`;
    tableDisplay.innerHTML = definition;
    searchFilter();
};

const searchFilter = () => {
    let table = document.querySelector(".searchTable");
    let row = table.getElementsByTagName("tr");
    let cityElement = document.getElementById("city");
    let stateElement = document.getElementById("state");
    let countryElement = document.getElementById("country");
    let city, state, country;
    console.log("here");
    for (let i = 1; i < row.length; i++) {
        row[i].style.display = "";
    }
    let cityArr = [];
    let stateArr = [];
    let countryArr = [];
    let cityEntries = `<option> All </option>`, stateEntries = `<option> All </option>`, countryEntries = `<option> All </option>`;
    for (let i = 1; i < row.length; i++) {
        city = row[i].getElementsByTagName("td")[1].textContent.toUpperCase();
        state = row[i].getElementsByTagName("td")[3].textContent.toUpperCase();
        country = row[i].getElementsByTagName("td")[4].textContent.toUpperCase();
        if (cityArr.indexOf(city) == -1) {
            cityArr.push(city);
            let tempCity = `<option> ${row[i].getElementsByTagName("td")[1].textContent} </option>`;
            cityEntries += tempCity;
        }
        if (stateArr.indexOf(state) == -1) {
            stateArr.push(state);
            let tempState = `<option> ${row[i].getElementsByTagName("td")[3].textContent} </option>`;
            stateEntries += tempState;
        }
        if (countryArr.indexOf(country) == -1) {
            countryArr.push(country);
            let tempCountry = `<option> ${row[i].getElementsByTagName("td")[4].textContent} </option>`;
            countryEntries += tempCountry;
        }
    }
    cityElement.innerHTML = cityEntries;
    stateElement.innerHTML = stateEntries;
    countryElement.innerHTML = countryEntries;
};

const searchTable = () => {
    let searchByCity = document.getElementById("city").value.toUpperCase();
    let searchByState = document.getElementById("state").value.toUpperCase();
    let searchByCountry = document.getElementById("country").value.toUpperCase();
    let table = document.querySelector(".searchTable");
    let row = table.getElementsByTagName("tr");
    let id, city, phone, state, country;
    for (let i = 1; i < row.length; i++) {
        row[i].style.display = "";
    }
    let count=0;
    for (let i = 1; i < row.length; i++) {
        let city = row[i].getElementsByTagName("td")[1].textContent.toUpperCase();
        let state = row[i].getElementsByTagName("td")[3].textContent.toUpperCase();
        let country = row[i].getElementsByTagName("td")[4].textContent.toUpperCase();
        let cityMismatch = false;
        let stateMismatch = false;
        count=0;
        if (searchByCity !== "ALL") {
            if (city.indexOf(searchByCity) > -1) {
                row[i].style.display = "";
                count++;
            }
            else {
                row[i].style.display = "none";
                cityMismatch = true;
            }
        }
        if (searchByState !== "ALL" && !cityMismatch) {
            if (state.indexOf(searchByState) > -1) {
                row[i].style.display = "";
                count++;
            }
            else {
                row[i].style.display = "none";
                stateMismatch = true;
            }
        }
        if (searchByCountry !== "ALL" && !cityMismatch && !stateMismatch) {
            if (country.indexOf(searchByCountry) > -1) {
                row[i].style.display = "";
                count++;
            }
            else {
                row[i].style.display = "none";
            }
        }
    }
    // let tempArr = [];
    // let tempArr2 = [];
    // for (let i = 1; i < row.length; i++) {
    //     city = row[i].getElementsByTagName("td")[1].textContent.toUpperCase().indexOf(searchByCity);
    //     if (city != -1 && (searchByState.indexOf("ALL") != -1 && searchByCountry.indexOf("ALL") != -1)) {
    //         row[i].style.display = "";
    //     }
    //     else{
    //         row[i].style.display = "none";
    //     }
    // }
    // console.log(tempArr.length);
    // for (let i = 1; i < row.length; i++) {
    //     state = row[i].getElementsByTagName("td")[3].textContent.toUpperCase().indexOf(searchByState);
    //     if (state != -1 || (searchByCity.indexOf("ALL") != -1 || searchByCountry.indexOf("ALL") != -1)) {
    //         row[i].style.display = "";
    //     }
    //     else{
    //         row[i].style.display = "none";
    //     }
    // }
    // console.log(tempArr2.length);
    // for (let i = 1; i < row.length; i++) {
    //     country = row[i].getElementsByTagName("td")[4].textContent.toUpperCase().indexOf(searchByCountry);
    //     if (country != -1 || (searchByCity.indexOf("ALL") != -1 || searchByState.indexOf("ALL") != -1)) {
    //         row[i].style.display = "";
    //     }
    //     else{
    //         row[i].style.display = "none";
    //     }
    // }
};