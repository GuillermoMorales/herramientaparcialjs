var productos=[];
var ventas_realizadas=[];

var menu= parseInt(prompt("¿Qué desea hacer: \n1-Agregar Producto \n2-Modificar Stock \n3-Registrar Venta \n4-Mostrar promedio de Ventas \n5-Mostrar productos con Stock 0: \nNOTA--No supe como recolectar los datos a traves de prompt, pero si funciona todo atraves de consola"));
while(menu!=6){
switch(menu){
    case 1:
        prompt("Escriba lo siguiente para poder agregar su producto: código, descripción, tipo, precio de compra, precio de venta y el stock: ");
        agregar(codigo, descripcion, tipo, precio_compra, precio_venta, stock);
        break;
    case 2:
        prompt("Escriba el codigo y el nuevo stock: ");
        modificar_stock(codigo, num);
        break;
    case 3:
        prompt("Digite el codigo y la cantidad: ");
        venta(codigo, num);
        break;
    case 4:
        prompt("A continuación se mostrará el promedio de ventas: ");
        promedio();
        break;
    case 5:
        prompt("A continuación se mostrarán los codigos de los productos con stosck cero: ");
        stock_cero();
        break;

    default:
    console.log("Digite una opcion correcta");    
}
menu= parseInt(prompt("¿Qué desea hacer: \n1-Agregar Producto \n2-Modificar Stock \n3-Registrar Venta \n4-Mostrar promedio de Ventas \n5-Mostrar productos con Stock 0: "));
};


function agregar(codigo1,descripcion1,tipo1,precio_compra1,precio_venta1,stock1){
    var contador=0;
    var miObjeto = {codigo: codigo1, descripcion:descripcion1, tipo:tipo1, precio_compra:precio_compra1, precio_venta:precio_venta1, stock:stock1};
    productos.push(miObjeto);
        
    
    
    return productos;
}

function modificar_stock(codigos,nuevo){
    for (var i = 0; i < productos.length; i++){
        if(productos[i].codigo===codigos){
            productos[i].stock=nuevo;
        }
    }
}

function venta(codigos,numero){
    
    for (var i = 0; i < productos.length; i++){
        if(productos[i].codigo===codigos){
            if(productos[i].stock>0){
                productos[i].stock=productos[i].stock-numero;
                var miObjeto = {codigo: codigos, precio_venta:productos[i].precio_venta, stock:numero};
                ventas_realizadas.push(miObjeto);
            }
            else{
                console.log("No puedes tener algo menor a 0");
            }
        }

    }
}

function promedio(){
    var cont_total=0;
    var cont=0;
    for (var i = 0; i < ventas_realizadas.length; i++){

        cont=ventas_realizadas[i].precio_venta*ventas_realizadas[i].stock;
        cont_total=cont_total+1;

    }

    return cont/cont_total;

}

function stock_cero(){
    var aux=[];
    for (var i = 0; i < productos.length; i++){

        if(productos[i].stock===0){
            console.log(productos[i].descripcion);
            aux.push(productos[i].codigo);
        }

    }
    return aux;
}