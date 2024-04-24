function calculateSGPA() {
    var sgpa = parseFloat(document.getElementById('sgpa').value);

    if (isNaN(sgpa) || sgpa < 0 || sgpa > 10) {
        document.getElementById('sgpaResult').innerHTML = "Please enter a valid SGPA (between 0 and 10).";
    } else {
        var percentage = (sgpa - 0.75) * 10;
        document.getElementById('sgpaResult').innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
    }
}

function calculateYGPA() {
    var sgpa1 = parseFloat(document.getElementById('sgpa1').value);
    var sgpa2 = parseFloat(document.getElementById('sgpa2').value);

    if (isNaN(sgpa1) || isNaN(sgpa2) || sgpa1 < 0 || sgpa1 > 10 || sgpa2 < 0 || sgpa2 > 10) {
        document.getElementById('ygpaResult').innerHTML = "Please enter valid SGPA values (between 0 and 10).";
    } else {
        var ygpa = (sgpa1 + sgpa2) / 2;
        document.getElementById('ygpaResult').innerHTML = "Yearly GPA: " + ygpa.toFixed(2);
    }
}
