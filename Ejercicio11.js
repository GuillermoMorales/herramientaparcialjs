//Ejercicio11
var veces = prompt("Ingrese la cantidad de personas:")
let megaarray=[];
for(let i=0;i<veces;i++)
{
  var nombre = prompt("Ingrese el Nombre: ");
  var apellido = prompt("Ingrese el Apellido: ");
  var fecha = prompt("Ingrese el Fecha Nacimiento: ");
  var numero = prompt("Ingrese el Número Telefónico: ");
  var correo = prompt("Ingrese el Correo electrónico: ");
  let array=[];
  
  function imprimir(n,a,f,t,c)
  {
    array.push(n);
    array.push(a);
    array.push(f);
    array.push(t);
    array.push(c);
    var f = {nombre:n,apellido:a,fecha:f,numero:t,correo:c};
    megaarray = push(f);
    return megaarray;
  }
  
}
console.log(megaarray)