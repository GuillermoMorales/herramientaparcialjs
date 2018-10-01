let array = [1,2,3,4,5];
var suma = 0;
function sumatoria(a)
{
    for(let i=0;i<=a.length-1;i++)
    {
        suma = suma + a[i];
    }
    return suma;
}
console.log(sumatoria(array));