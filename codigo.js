 //FUNCIONES
//PRECIO DE UN PRODUCTO
function PrecioProducto(){
    var almohada;
    var puff;
    var mantel;
    
    var producto= prompt("¿Que producto quiere comprar? almohada = $600 puff = $2000 mantel = $1000")
    var precio;
    switch(producto){
        case "almohada": precio=600;
        break;
        case "puff": precio=2000;
        break;
        case "mantel": precio = 1000;
        break;
        default: alert("No se encontro ese producto");
    }
    return precio }
    var precio = PrecioProducto()
    alert(precio)
    
    //PRECIO TOTAL
    function PrecioTotal(precio){
    var cantidad = parseInt(prompt("Ingrese la cantidad de productos que quiere comprar"))  
    total=precio*cantidad; 
    return total  }
    
    
    
    var total = PrecioTotal(precio)
    alert("El total de los productos seleccionados es: "+total);