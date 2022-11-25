let cars = [];

function addCar(brand, model, year){
    cars.push({
        brand: brand.value,
        model: model.value,
        year: year.value

    });

    loadMyCars();
}

function loadMyCars(){
    let result = "";

    result +="<tr>";
    result +="<th>Brand</th>";
    result +="<th>Model</th>";
    result +="<th>Year</th>";
    result +="</tr>";

    for(let i=0; i<cars.length; i++){
        result +="<tr>";
        result +="<td>" + cars[i].brand + "</td>";
        result +="<td>" + cars[i].model + "</td>";
        result +="<td>" + cars[i].year  + "</td>";
        result +="</tr>";

    }

    result += "<h3> Totally" + cars.length + " cars</h3>";
    document.getElementById("carTable").innerHTML = result;

}