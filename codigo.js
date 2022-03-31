//CLASE, OBJETO, METODO 

class Producto {

    constructor(nombre, precio, color, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }

    precioPorCantidad(){
        var cantidad = parseInt(prompt("Ingrese la cantidad de productos que quiere comprar")) 
        this.precio = this.precio*cantidad
        return this.precio
    }

}

const almohada=new Producto("almohada", 600, "blanco", 6)
const puff=new Producto("puff", 2000, "marron", 4)
const mantel=new Producto("mantel", 1000, "beige", 8)

var producto= prompt("¿Que producto quiere comprar?"+almohada.nombre+" ,"+puff.nombre+" ,"+mantel.nombre)

switch (producto) {
    case "almohada":
        alert(almohada.precioPorCantidad());
        break;
    case "puff": 
        alert(puff.precioPorCantidad());    
        break;
    case "mantel":
        alert(mantel.precioPorCantidad());
        break;
    default:
        alert("Ese producto no existe")   
        break; 
}

//ARRAYS

class Persona {
    constructor(nombre, apellido, edad, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
    }
}

const clientes = []

const agregarClienteLista = (persona) => {
    clientes.push(persona)
}



function crearCliente(){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = parseInt(prompt("Ingrese su edad")) ;
    let mail = prompt("Ingrese su mail");
    const cliente = new Persona(nombre, apellido, edad, mail);
    agregarClienteLista(cliente);
}

const cliente1 = new Persona("Maria", "Zucchi", 52, "marita@gmail.com");
agregarClienteLista(cliente1);
const cliente2 = new Persona("Juan", "Zucchi", 45, "juancito@gmail.com");
agregarClienteLista(cliente2);

var valida= prompt("¿Quiere crear un unsuario? S/N")
if(valida =="S"){
    crearCliente();
}else{
    alert("Será la proxima")
}

const verListaClientes = () => {
    return clientes;
}

console.log(verListaClientes());

function buscarCliente(nombre, clientes) {
    let i = clientes.length - 1;
    while (i >= 0 && nombre != clientes[i].nombre) {
        i--;
    }
    return i;
}

let eliminarCliente = buscarCliente(
    prompt("Ingrese el nombre del cliente que quiere eliminar"),
    clientes
);
if (eliminarCliente >= 0) {
    clientes.splice(eliminarCliente, 1);
}

console.log(verListaClientes());

