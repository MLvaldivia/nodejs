function add(x1,x2){
    return x1+x2;
}

function multiplicar(x1,x2){
    return x1*x2
}

function dividir(x1,x2){
    if (x2==0){
        console.log("No se puede dividir por cero")
    }
    else{
        return x1/x2
    }
}

exports.add = add;
exports.multiplicar=multiplicar;
exports.dividir=dividir;