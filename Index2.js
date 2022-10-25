let nombre = prompt("Hola!, cual es tu nombre?");
alert("Bienvenido " +nombre +" Al Mejor Carrito de compras De La Historia");
let compra = true;
let total = 0;
let descuento = 0;
//* comprobacion del descuento de cada producto 
function tengodescuento (total)  {
    if (total > 2000){
        descuento = total * 0.2
        total = total - descuento
    }else if (total <= 2000 && total > 1000){
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
            total += 500
            break;
        case 2:
            total += 800
            break;
        case 3:
            total += 1000
            break;
        case 4:
            total += 750
            break;
    }
}
//////////////////PRINCIPAL//////////////////////////
while (compra) {
    let productos = parseInt(prompt("Que producto desea agregar al carrito? 1.Converse($500), 2.Vanz($800), 3.Pocholin($1000), 4.Reeboks($750)"))
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