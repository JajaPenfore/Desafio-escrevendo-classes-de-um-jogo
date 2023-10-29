class classe{
    constructor(tipo1, tipo2){
        this.tipo1 = tipo1
        this.tipo2 = tipo2
    }
}
let soldado = new classe("mago", "guerreiro")

let invoice = {
    nome: "Raiden",
    idade: 29,
    ataque: { 
       0: ["magia"],
       1: ["espada"]
    }   
}
generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`${invoice.nome} o ${soldado.tipo1} atacou usando ${invoice.ataque[0]}`)
    console.log(`${invoice.nome} o ${soldado.tipo2} atacou usando ${invoice.ataque[1]}`)
}

let classe2 = 1
    if(classe2 === 1){
        console.log("Raiden o monge atacou usando artes marciais")
    } else{
        console.log("Raiden o ninja atacou usando shuriken")
    }