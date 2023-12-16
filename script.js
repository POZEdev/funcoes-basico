var vdRank = diferenca(30, 30)
function diferenca(vitoria, derrota){
    console.log("Está com "+ vitoria + " vitórias")
    console.log("Está com "+ derrota + " derrotas")
    var vdRank1 = vitoria - derrota
    return vdRank1
}

var rank ="Iniciante"

if (vdRank>0 && vdRank <=10){
    rank="Ferro"

}
else if (vdRank>=11 && vdRank<=20){
    rank="Bronze"
}

else if (vdRank>=21 && vdRank<=50){
    rank="Prata"
}

else if (vdRank>=51 && vdRank<=80){
    rank="Ouro"
}

else if (vdRank>=81 && vdRank<=90){
    rank="Diamante"
}

else if (vdRank>=91 && vdRank<=100){
    rank="Lendário"
}

else if (vdRank>=101){
    rank="Imortal"
}

    console.log("O Vingador tem um saldo de "+ vdRank + " vitórias, e está no Rank " + rank)
