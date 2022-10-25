let nombre = prompt("Hola!, cual es tu nombre?");
alert("Bienvenido " +nombre +" al mejor Carrito de compras de La HISTORIA!!! donde podras obtener decuentos con solo un click");
let compra = true;
let total = 0;
let descuento = 0;
//* comprobacion del descuento de cada producto 
function tengodescuento (total)  {
    if (total > 5000){
        descuento = total * 0.2
        total = total - descuento
    }else if (total <= 5000 && total > 2500){
        descuento = total * 0.15
        total = total - descuento
    }else{
        descuento = total * 0.1
        total = total - descuento
    }
    return total
}
//* producto que va al carrito numericamente
function alcarrito (producto) {
    switch (producto) {
        case 1:
            total += 1000
            break;
        case 2:
            total += 1600
            break;
        case 3:
            total += 2000
            break;
        case 4:
            total += 1500
            break;
    }
}
//////////////////PRINCIPAL//////////////////////////
while (compra) {
    let productos = parseInt(prompt("Que producto desea agregar al carrito? \n1.Converse($1000) \n2.Vanz($1600) \n3.Pocholin($2000) \n4.Reebok($1500)"))
    alcarrito(productos)

    let siguecomprando = prompt("¿Desea seguir comprando? (si/no):")
    while (siguecomprando !== "no" && siguecomprando !== "si") {
        siguecomprando = prompt("Responda: si/no")
    }

    if (siguecomprando === "no") {
        compra = false
        total = tengodescuento(total)
    }
}

alert("El total de su compra es de: " +total + " Ahorrado: " +descuento);