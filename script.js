function soma(){
    var operator1 = document.getElementById('calc1');
    var operator2 = document.getElementById('calc2');
    var res = document.getElementById('resSoma');
    var namber1 = Number(operator1.value);
    var number2 = Number(operator2.value);
    var result = namber1 + number2;
    res.innerHTML = `${namber1} + ${number2} = ${result}`;
}
function subtracao(){
    var operator1 = document.getElementById('sub1');
    var operator2 = document.getElementById('sub2');
    var res = document.getElementById('resSub');
    var number1 = Number(operator1.value);
    var number2 = Number(operator2.value);
    var result = number1 - number2;
    res.innerHTML = `${number1} - ${number2} = ${result}`;
}
function division(){
    var operator1 = document.getElementById('div1');
    var operator2 = document.getElementById('div2');
    var res = document.getElementById('resDiv');
    var number1 = Number(operator1.value);
    var number2 = Number(operator2.value);
    var result = number1 / number2;
    res.innerHTML = `${number1} / ${number2} = ${result}`;
}
function multiplicacao(){
    var operator1 = document.getElementById('mult1');
    var operator2 = document.getElementById('mult2');
    var res = document.getElementById('resMult');
    var number1 = Number(operator1.value);
    var number2 = Number(operator2.value);
    var result = number1 * number2;
    res.innerHTML = `${number1} * ${number2} = ${result}`;
}