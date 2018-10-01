var producto=[];
var mensaje;
var menu = prompt("¿Qué debe realizar el sistema?\n1-Agregar Producto\n2-Modificar Stock\n3-Registrar Venta\n4-Promedio de Ventas\n5-Productos Stock 0\n6-Salir");
while (menu!=6)
{
    switch(menu)
    {
        case '1':
                let codigoNuevo = prompt("Ingrese el codigo del producto nuevo");
                let descripcionNueva = prompt("Ingrese la descripción del producto nuevo");
                let tipoNuevo = prompt("Ingrese el tipo de producto");
                let precioCompraNueva = prompt("Ingrese el precio de compra del producto nuevo");
                let precioVentaNueva = prompt("Ingrese el precio de venta del producto nuevo");
                let stockNuevo = prompt("Ingrese el stock del nuevo producto");
                agregarProducto(codigoNuevo,descripcionNueva,tipoNuevo,precioCompraNueva,precioVentaNueva,stockNuevo);
                break;
        case '2':
                let codigoModificar = prompt("Ingrese el codigo del producto a modificar");
                let stockModificar = prompt("Ingrese el nuevo stock del producto a modificar");
                modificarStock(codigoModificar,stockModificar);
                break;
        case '3':
                let codigoVendido = prompt("Ingrese el codigo del producto vendido");
                let stockVendido = prompt("Ingrese la cantidad vendida");
                restarStock(codigoVendido,stockVendido);
                break;
        case '4':
                console.log(stockCero);
                break;
        default:
                console.log("Opción no válida");
    }
    menu = prompt("¿Qué debe realizar el sistema?\n1-Agregar Producto\n2-Modificar Stock\n3-Registrar Venta\n4-Promedio de Ventas\n5-Productos Stock 0\n6-Salir");
};

function agregarProducto(c,d,t,pc,pv,s)
{
  var ingresar = {Codigo:c,Descripcion:d,Tipo:t,precioCompra:pc,precioVenta:pv,Stock:s};
  producto.push(ingresar);
  console.log("Se ingresoo");
  return producto;
}
