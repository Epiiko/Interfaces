function sumar(num1, num2){
    console.log ("Aplicacion de calculador. SUMA")
    const formu= document.getElementById('formulario');
    let opA= formu['operandoA'];
    let opB= formu['operandoB'];
    let resultado = parseInt(opA.value) + parseInt(opB.value);
    if (isNaN(resultado)){
        document.getElementById('resultado').innerHTML = 'Datos introducidos no son numérico';
    }else{
        document.getElementById('resultado').innerHTML = `El resultado es : ${resultado} `;    }
}
function restar(num1, num2){
    console.log ("Aplicacion de calculador. SUMA")
    const formu= document.getElementById('formulario');
    let opA= formu['operandoA'];
    let opB= formu['operandoB'];
    let resultado = parseInt(opA.value) - parseInt(opB.value);
    if (isNaN(resultado)){
        document.getElementById('resultado').innerHTML = 'Datos introducidos no son numérico';
    }else{
        document.getElementById('resultado').innerHTML = `El resultado es : ${resultado} `;    }
}
function multiplicar(num1, num2){
    console.log ("Aplicacion de calculador. SUMA")
    const formu= document.getElementById('formulario');
    let opA= formu['operandoA'];
    let opB= formu['operandoB'];
    let resultado = parseInt(opA.value) * parseInt(opB.value);
    if (isNaN(resultado)){
        document.getElementById('resultado').innerHTML = 'Datos introducidos no son numérico';
    }else{
        document.getElementById('resultado').innerHTML = `El resultado es : ${resultado} `;    }
}
function dividir(num1 , num2){
    console.log ("Aplicacion de calculador. SUMA")
    const formu= document.getElementById('formulario');
    let opA= formu['operandoA'];
    let opB= formu['operandoB'];
    let resultado = parseInt(opA.value) / parseInt(opB.value);
    if (isNaN(resultado)){
        document.getElementById('resultado').innerHTML = `Datos introducidos no son numéricos`;
    }else{
        document.getElementById('resultado').innerHTML = `El resultado es : ${resultado} `;
    }
}