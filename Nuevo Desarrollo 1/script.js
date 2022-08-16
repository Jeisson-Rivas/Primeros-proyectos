
function sumar(){
    var a = document.getElementById('numero1').value;
    var b = document.getElementById('numero2').value;
    var suma = parseInt (a)+ parseInt(b);
    document.getElementById('resultado').innerHTML = suma;


}
function restar(){
    var a = document.getElementById('numero1').value;
    var b = document.getElementById('numero2').value;   
    var resta = parseInt (a)- parseInt(b);
    document.getElementById('resultado').innerHTML = resta;
}

function multiplica(){
    var a = document.getElementById('numero1').value;
    var b = document.getElementById('numero2').value;   
    var mult = parseInt (a)* parseInt(b);
    document.getElementById('resultado').innerHTML = mult;
}
function divide(){
    var a = document.getElementById('numero1').value;
    var b = document.getElementById('numero2').value;   
    var divi = parseInt (a) / parseInt(b);
    document.getElementById('resultado').innerHTML = divi;
}

function Caledad(){
    var e = document.getElementById('edad').value;

    if ( e < 16 ) {
        alert('no debe beber alcohol');
    }
    else if (e < 19 ){
        alert('no debe beber alcohol, pero lo hace');
    }
    else{
       alert('ya puede beber alcohol');
    }
}