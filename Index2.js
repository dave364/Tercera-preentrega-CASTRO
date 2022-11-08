    let nombre = prompt("Hola!, cual es tu nombre?");
    alert("Bienvenido " +nombre+ "\n Al mejor Carrito de compras de La HISTORIA!!! donde podras obtener decuentos con solo un click");
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
                case "converse":
                    total += 1000
                    break;
                case "vanz":
                    total += 1600
                    break;
                case "pocholin":
                    total += 2000
                    break;
                case "nike":
                    total += 1500
                    break;
            }
    }

    function mizapato(modelo,color,talla){
        this.modelo = modelo;
        this.color = color;
        this.talla = talla;
    }
     
    let zapatos = [];

    //////////////////PRINCIPAL//////////////////////////
    while (compra) {
        let productos = (prompt("Que calzado desea agregar al carrito? (escriba el nombre) \nConverse $1000 \nVanz $1600 \nPocholin $2000 \nReebok $1500")).toLowerCase();
        alcarrito(productos)

        zapatos.push(new mizapato(prompt("Ingrese modelo (Clasico, Moderno)"),prompt("Ingrese color"),prompt("Ingrese talle"))) 

        siguecomprando = prompt("¿Desea seguir comprando? (si/no):").toLowerCase();
        while (siguecomprando !== "no" && siguecomprando !== "si") {
            siguecomprando = prompt("Responda: si/no")
        }

        if (siguecomprando === "no") {
            compra = false
            total = tengodescuento(total)
            
            zapatos.forEach(function(zapato, i) {
             const index = i+1;   
            alert("El total de su compra es de: " +total + "\n Ahorrado: " +descuento + "\ncaracteristicas de tu calzado seleccionado producto: " + index + " \nModelo: " + zapato.modelo + "\ncolor: " + zapato.color + "\ntalla: " + zapato.talla);
            });
        }

        
    }

    
    alert("Hasta luego, GRACIAS POR TU COMPRA!")

   

  

    