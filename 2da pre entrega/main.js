// Definir el array de productos
let productos = [
    {id: 1, titulo: 'Camiseta', stock: 10, precio: 15.99},
    {id: 2, titulo: 'Pantalones', stock: 7, precio: 25.99},
    {id: 3, titulo: 'Zapatos', stock: 5, precio: 45.99},
    {id: 4, titulo: 'Gorra', stock: 8, precio: 10.99},
    {id: 5, titulo: 'Cinturón', stock: 6, precio: 9.99}
];

// Solicitar el nombre del usuario
let nombreUsuario = prompt('Por favor, ingresa tu nombre');

// Saludar al usuario
alert(`¡Hola, ${nombreUsuario}! Bienvenido a nuestra tienda.`);

// Mostrar lista de productos
console.log(productos)

// Inicializar el total de la compra
let totalCompra = 0;

// Preguntar al usuario qué productos quiere comprar
let seguirComprando = true;
while (seguirComprando) {
    let idProducto = prompt('Ingresa el ID del producto que quieres comprar');
    let producto = productos.find(p => p.id == idProducto);
    if (producto) {
        totalCompra += producto.precio;
        alert(`Has agregado ${producto.titulo} a tu carrito. Tu total actual es $${totalCompra}`);
    } else {
        alert('Lo siento, ese producto no existe');
    }
    seguirComprando = confirm('¿Quieres agregar otro producto a tu carrito?');
}

// Mostrar el total de la compra
alert(`Tu total de compra es $${totalCompra}`);

// Preguntar en cuántas cuotas quiere pagar el total de la compra
let cuotas = prompt('¿En cuántas cuotas quieres pagar el total de la compra? (3 o 6)');
let valorCuota = totalCompra / cuotas;

// Mostrar cuánto debería pagar en cada cuota
alert(`Deberías pagar $${valorCuota.toFixed(2)} en cada una de las ${cuotas} cuotas.`);
