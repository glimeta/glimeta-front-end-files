var cars=[{
    brand: "Volvo",
    model: "V60"
},
{
    brand: "Saab",
    model: "900T"
},
{
    brand: "Opel",
    model: "Vectra"
}
];

function loadMyCars(){
    var result = "";
    for(var i=0; i<cars.length;i++){
        result +="<li>" + cars[i].brand + " " + cars[i].model + "</li>";
    }

    
    result +="<h3> Totally " + cars.length + " cars</h3>";
    document.getElementById("myCars").innerHTML = result;

}