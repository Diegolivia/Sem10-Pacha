//pregunta 1, suma
function P1(n1,n2){
    return n1+n2;
}

//pregunta 2, Potencia
function P2(potencia,numero){
    let num=1
    for (let i = 0; i < potencia; i++){
        num*=numero;
    }
    return num;
}

//pregunta 3, suma de cubos de cualquier cantidad de numeros
function P3(...theArgs){
    let num=0
    for (let args of theArgs){
        num+=args*args*args
    }
    return num
}

//Pregunta 4, area del triangulo
function P4(base,height){
    return base*height*.5;
}

//Pregunta 5, calculadora de 3 parametros
function P5(n1,op,n2){
    switch (op) {
        case '+':
            return n1+n2;
            break;
        case '-':
            return n1-n2;
            break;
        case '/':
            return n1/n2;
            break;
        case 'x':
            return n1*n2;
            break;
        case '%':
            return n1%n2;
            break;
        default:
            return "El parametro no es reconocido"
            break;
    }
}