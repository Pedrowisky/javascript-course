//exercise 011
var date = new Date()
var diaSemana = date.getDay()

/*
0 = Domin
1 = Segunda
2 = Terça
3 = Quar
4 = Quin
5 = Sex
6 = Sab
*/
console.log(diaSemana)

switch (diaSemana) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sabádo")
        break;

    default:
        console.log("Dia nenhum!")
}