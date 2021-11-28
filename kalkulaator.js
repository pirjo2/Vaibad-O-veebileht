

function calcTotal()  
{
    
    var toode = document.getElementById("toode").value;
    var pikkus = document.getElementById("pikkus").value;
    var laius = document.getElementById("laius").value;
    var total = pikkus * laius * toode;

    document.getElementById("result").innerHTML = "€" + total.toFixed(2);
    console.log(total)


}