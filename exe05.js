async function somar (n1, n2){


    console.log("Somar:", n1,"",n2)
    


    let soma;


    setTimeout(()=>{

        console.log(n1+n2)

        soma = n1 + n2;

        console.log("Soma: - :", soma)

        return soma;

    },5000)


}

function subtrair(n1, n2){

    return n1 - n2
}

function multiplicar(n1, n2){
    
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}

async function calculos (){

    let a = 30
    let b = 10
    
    var soma = await somar(a,b);
    
    var subtracao = subtrair(a,b);

    var multiplicacao = multiplicar(a,b);

    var divisao = dividir(a,b)


    console.log("Subtração:", subtracao)
    console.log("Multiplicação:", multiplicacao)
    console.log("Divisão:", divisao)



}

calculos()

