

function calcTotal()  
{
    //Muutujate väärtuste võtmine HTML failist elemendi ID järgi
    var toode = document.getElementById("toode").value;
    var pikkus = document.getElementById("pikkus").value;
    var laius = document.getElementById("laius").value;
    //Korrutustehe
    var total = pikkus * laius * toode;
    //HTML failis oleva elemendi muutmine ID järgi, ümardamine kahe komakohani
    document.getElementById("result").innerHTML = "€" + total.toFixed(2);


}