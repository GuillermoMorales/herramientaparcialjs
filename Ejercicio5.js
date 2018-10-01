let array=["A",1,3,4,{a:1}];
aux=[];
function fumada(a,tipo)
{
    for(let i=0;i<=a.length-1;i++)
    {
        if(typeof a[i] == tipo)
        {
            aux.push(a[i]);
        }
    }
    return aux;
}
console.log(fumada(array,"number"));