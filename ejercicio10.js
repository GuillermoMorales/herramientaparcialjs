//Ejercicio 10
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
    return f;
}

console.log(imprimir(nombre,apellido,fecha,numero,correo));







let array2=["juan","pedro"];
var f = JSON.stringify(array2);
console.log(f);
console.log(JSON.stringify(array))



var r = 8;
function lala(a)
{
  a = a +2;
  return a;
}
console.log(lala(r));



let listLetters = ['A','h','e','v','F'];
let cantLetters = listLetters.length;
console.log(cantLetters);

listLetters.forEach((letter, index)=>
{
  console.log("Letra "+index+": "+letter);
  //Imprimirá cada valor en la consola
});

