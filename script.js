function calcula(opera) {
    let num1 = parseFloat(document.getElementById('umzero').value);
    let num2 = parseFloat(document.getElementById('umdois').value);
    let resultado = 0;
    if(isNaN(num1) || isNaN(num2)){
        alert('AAAAAAAAAAAAAAA.');

    }else{

        if(opera == '+'){
            resultado = num1 + num2;
        }else if(opera == '-'){
            resultado = num1 - num2;
        }else if(opera == '*'){
            resultado = num1 * num2;
        }else if(opera == '/'){
            resultado = num1 / num2;
        }
        document.getElementById('resultado').textContent = "resultado: " + resultado;
    }
}