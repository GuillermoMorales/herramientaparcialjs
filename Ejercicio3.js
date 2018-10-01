function tipos(arr){
    var texto=0;
    var numeros=0;
    var funciones=0;
    var objeto=0;
    var booleano=0;
    var indefinido=0;

    for (var i = 0; i <arr.length; i++){
        if(typeof arr[i]=='string'){
            texto=texto+1;
        }
        else if(typeof arr[i]=='number'){
            numeros=numeros+1;
        }
        else if(typeof arr[i]=='function'){
            funciones=funciones+1;
        }
        else if(typeof arr[i]=='object'){
            objeto=objeto+1;
        }
        else if(typeof arr[i]=='boolean'){
            booleano=booleano+1;
        }
        else{
            indefinido=indefinido+1;
        }

    }

    console.log(`De tipo String aparecen ${texto}`);
    console.log(`De tipo Number aparecen ${numeros}`);
    console.log(`De tipo Function aparecen ${funciones}`);
    console.log(`De tipo Object aparecen ${objeto}`);
    console.log(`De tipo Boolean aparecen ${booleano}`);
    console.log(`De tipo Indefinido aparecen ${indefinido}`);
    
}