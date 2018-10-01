var valor = prompt("Ingrese el valor: ");
var mensaje;

function adivinanza(numero)
{
    let array=[];
    for(let j=0;j<=20;j++)
    {
        array.push(Math.floor(Math.random() * 101));
    }
    console.log(array);
    
    for(let i=0;i<=array.length-1;i++)
    {
        if(numero == array[i])
        {
            mensaje = ("Has ganado");
            break;
        }
        else
        {
            mensaje =("Has perdido");
        }
    }
    return mensaje;
}

console.log(adivinanza(valor));