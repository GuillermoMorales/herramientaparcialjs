function seis(cadena){
    var nueva="";
    for (var i = 0; i <cadena.length; i++){
        if(cadena[i]==='m'){
            nueva=nueva+'0';
        }
        else if(cadena[i]==='0'){
            nueva=nueva+'m';
        }
        else if(cadena[i]==='1'){
            nueva=nueva+'u';
        }
        else if(cadena[i]==='2'){
            nueva=nueva+'r';
        }
        else if(cadena[i]==='3'){
            nueva=nueva+'c';
        }
        else if(cadena[i]==='4'){
            nueva=nueva+'i';
        }
        else if(cadena[i]==='5'){
            nueva=nueva+'e';
        }
        else if(cadena[i]==='6'){
            nueva=nueva+'l';
        }
        else if(cadena[i]==='7'){
            nueva=nueva+'a';
        }
        else if(cadena[i]==='8'){
            nueva=nueva+'g';
        }
        else if(cadena[i]==='9'){
            nueva=nueva+'o';
        }
        else if(cadena[i]==='u'){
            nueva=nueva+'1';
        }
        else if(cadena[i]==='r'){
            nueva=nueva+'2';
        }
        else if(cadena[i]==='c'){
            nueva=nueva+'3';
        }
        else if(cadena[i]==='i'){
            nueva=nueva+'4';
        }
        else if(cadena[i]==='e'){
            nueva=nueva+'5';
        }
        else if(cadena[i]==='l'){
            nueva=nueva+'6';
        }
        else if(cadena[i]==='a'){
            nueva=nueva+'7';
        }
        else if(cadena[i]==='g'){
            nueva=nueva+'8';
        }
        else if(cadena[i]==='o'){
            nueva=nueva+'9';
        }
        else{
            nueva=nueva+' ';
        }

    }
    console.log(nueva);
}