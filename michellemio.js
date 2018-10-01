var producto=[];
var menu = prompt("¿Qué debe realizar el sistema?\n1-Agregar Producto\n2-Modificar Stock\n3-Registrar Venta\n4-Promedio de Ventas\n5-Productos Stock 0\n6-Salir");
while (menu!=6)
{
    switch(menu)
    {
        case '1':
                let codigo = prompt("Ingrese el codigo del producto nuevo");
                let descripcion = prompt("Ingrese la descripción del producto nuevo");
                let tipo = prompt("Ingrese el tipo de producto");
                let preciocompra = prompt("Ingrese el precio de compra del producto nuevo");
                let precioventa = prompt("Ingrese el precio de venta del producto nuevo");
                let stock = prompt("Ingrese el stock del nuevo producto");
                agregarProducto(codigo,descripcion,tipo,preciocompra,precioventa,stock);
                break;
        case '2':
                let codigo = prompt("Ingrese el codigo del producto a modificar");
                let stock = prompt("Ingrese el nuevo stock del producto a modificar");
                modificarStock(codigo,stock);
                break;
        case '3':
                let codigo = prompt("Ingrese el codigo del producto vendido");
                let stock = prompt("Ingrese la cantidad vendida");
                restarStock(codigo,stock);
                break;
        case '4':
                console.log(stockCero);
                break;
        default:
                console.log("Opción no válida");
    }
    menu = prompt("¿Qué debe realizar el sistema?\n1-Agregar Producto\n2-Modificar Stock\n3-Registrar Venta\n4-Promedio de Ventas\n5-Productos Stock 0\n6-Salir");
};
