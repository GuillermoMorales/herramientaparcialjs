var numero = prompt("Ingrese un número: ");
let array = [1,2,3,3,3,5,1,2,5];
var c=0;
function coins(n,a)
{
    for(let i=0;i<=array.length-1;i++)
    {
        if(n == a[i])
        {
            c=c+1;
        }
    }
    var mensaje = ("El número de ocurrencias es: ");
    return (mensaje+c);
}

console.log(coins(numero,array));