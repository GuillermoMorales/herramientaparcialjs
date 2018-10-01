var boligrafo=
{
    material:"plastico",
    color:"azul",
    marca:"Bic"
}

boligrafo.precio = 1.5;

console.log("Mi bolígrafo es de " + boligrafo.material + ", de la marca " + boligrafo.marca + " y escribe de color " + boligrafo.color + ". Cuesta " + boligrafo.precio + " €");

var personaje =
{
    nombre:"Heroe",
    vida:100,
    fuerza:10
};
function descripcion(objeto)
{
    var des = objeto.nombre + " tiene "+objeto.vida+" puntos de vida y "+objeto.fuerza+" de fuerza"
    return des;
}
console.log(descripcion(personaje));

var personaje2 = 
{
    nombre:"Heroe",
    vida:100,
    fuerza:10,
    describir: function()
    {
        var descripcion=  this.nombre + " tiene "+this.vida+" puntos de vida y "+this.fuerza+" de fuerza";
        return descripcion;
    }

};
console.log(personaje2.describir());


var personaje3 = {}; // Creación de un objeto sin ninguna propiedad
personaje3.nombre = "Héroe"; 
personaje3.vida = 100; 
personaje3.fuerza = 10; 
  
// Retorna la descripción del personaje 
personaje3.describir = function() { 
    var descripcion = this.nombre + " tiene " 
                    + this.vida + " puntos de vida y " 
                    + this.fuerza + " de fuerza";
    return descripcion; 
      
}; 
console.log(personaje3.describir());

var personaje3 = {}; // Creación de un objeto sin ninguna propiedad
personaje3.nombre = "Mago"; 
personaje3.vida = 150; 
personaje3.fuerza = 12; 
  
// Retorna la descripción del personaje 
personaje3.describir = function() { 
    var descripcion = this.nombre + " tiene " 
                    + this.vida + " puntos de vida y " 
                    + this.fuerza + " de fuerza";
    return descripcion; 
      
}; 
console.log(personaje3.describir());


//Creando prototipos 
var objeto1 = 
{
    nombre: "nombre del objeto1"
};
//Creamos el objeto 2 cuyo prototipo será el objeto 1
var objeto2 = Object.create(objeto1);

objeto2.nombre = "Karla";

//objeto2.nombre no es una propiedad del objeto2 pero
//sí está presente en su prototipo (objeto1)
console.log(objeto2.nombre);//retorna el nombre del prototipo 

console.log(objeto2);

var actor = 
{
    nombre: "",
    edad: 25,
    hijos: 2,
    xp:0,
    describir: function()
    {
        var descripcion = this.nombre +" tiene"+this.edad+" años, "+this.hijos+" hijos y "+this.xp+" puntos de experiencia.";
        return descripcion;
    }

};

var actor1 = Object.create(actor);
actor1.nombre = "Karla";
actor1.edad = "22";
actor.hijos = "1";

var actor2 = Object.create(actor);
actor2.nombre = prompt("Ingrese el nombre");
actor2.edad = "21";
actor2.hijos="0";

console.log(actor1.describir());
console.log(actor2.describir());


var carro =
{
    //Inicializa el personaje 
    init: function(marc,km,year )
    {
        this.marca = marc;
        this.kilometraje = km;
        this.anio = year;
        this.xp = 0;
    },

    //Retorna la descripción del personaje
    describir: function()
    {
        var descripcion = this.marca +" tiene "+this.kilometraje+" de kilometraje, del año "+this.anio+" y "
        +this.xp+" puntos de xp";
        return descripcion;
    }
};

var carro1 = Object.create(carro);
carro1.init("Toyota",1200,2010);

var carro2 = Object.create(carro);
carro2.init("Honda",1000,2000);



var Personaje = 
{
    //Funcion que inicia el personaje
    initPersonaje: function(nombre,vida,fuerza)
    {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
    }
};

var Jugador = Object.create(Personaje);
//Metodo que inicia el jugador
Jugador.initJugador = function(nombre,vida,fuerza)
{
    //Obtiene las propiedades de Personaje, comunes tanto a jugadores como enemigos definidas en Personaje
    this.initPersonaje(nombre,vida,fuerza);
    this.xp = 0;//Se inicia la experiencia del jugador en 0
};
//Metodo propio de jugador que retorna la descripcion del jugador 
Jugador.describir = function()
{
    var descripcion  = this.nombre +" tiene "+this.vida+" puntos de vida, "+this.fuerza+" puntos de fuerza y "+this.xp
    +" puntos de experiencia";
    return descripcion;
};

var Enemigo = Object.create(Personaje);
//Metodo que inicia el enemigo
Enemigo.initEnemigo = function(nombre,vida,fuerza,raza,cantidadXp)
{
    //Obtiene las propiedades de Personaje, comunes tanto a jugadores como enemigo definidas en Personaje
    this.initPersonaje(nombre, vida, fuerza);
    this.raza = raza;
    this.cantidadXp = cantidadXp;
};

var jugador1 = Object.create(Jugador);
jugador1.initJugador("Héroe", 150,25);

var jugador2 = Object.create(Jugador);
jugador2.initJugador("Mago",130,35);

var monstruo = Object.create(Enemigo);
monstruo.initEnemigo("ZogZog",40,40,"orco",10);

console.log(jugador1.describir());
console.log(monstruo.nombre);


//Guerra
var Personaje =
{
    //Inicia el personaje 
    initPersonaje:function(nombre,vida,fuerza)
    {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
    },

    //Ataca a un personaje objetivo
    atacar:function(objetivo)
    {
        if(this.vida>0)
        {
            var golpe = this.fuerza;
            console.log(this.nombre + " ataca a"+objetivo.nombre+" produciendole un daño de"
            +golpe+" puntos");
            objetivo.vida = objetivo.vida - golpe;
            if(objetivo.vida >0)
            {
                console.log(objetivo.nombre+" tiene todavia "
                            +objetivo.vida+" puntos de vida");
            }
            else
            {
                objetivo.vida = 0;
                console.log(objetivo.nombre+" ha muerto");
            }
        }
        else
        {
            console.log(this.nombre+" no puede atacar, está muerto");
        }
    }
};

var Jugador = Object.create(Personaje);

//Inicia el personaje 
Jugador.initJugador = function(nombre,vida,fuerza)
{
    this.initPersonaje(nombre,vida,fuerza);
    this.xp = 0;
};
//Retorna la descripcion del jugador
Jugador.describir = function()
{
    var descripcion = this.nombre + " tiene "+
                    this.vida+" puntos de vida, "+
                    this.fuerza+" de fuerza y "+
                    this.xp+" puntos de experiencia";
    return descripcion;
};
//Combate a un adversario
Jugador.combatir = function(adversario)
{
    this.atacar(adversario);
    if(adversario.vida == 0)
    {
        console.log(this.nombre+" ha matado "
                    +adversario.nombre+" y gana "
                    +adversario.cantidadXp+" puntos de experiencia");
        this.xp+=adversario.cantidadXp;
    }
};


var Enemigo = Object.create(Personaje);
//Metodo que inicia el enemigo
Enemigo.initEnemigo = function(nombre,vida,fuerza,raza,cantidadXp)
{
    this.initPersonaje(nombre,vida,fuerza);
    this.raza = raza;
    this.cantidadXp = cantidadXp;
;}

var jugador1 = Object.create(Jugador);
jugador1.initJugador("Héroe", 150,25);

var jugador2 = Object.create(Jugador);
jugador2.initJugador("Mago",130,35);

console.log(jugador1.describir());
console.log("---+++---");
console.log(jugador2.describir());
console.log("---+++---");

var monstruo = Object.create(Enemigo);
monstruo.initEnemigo("ZogZog",40,40,"orco",10);

console.log(monstruo.nombre+", un "+monstruo.raza+", aparece de repente");

monstruo.atacar(jugador1);
monstruo.atacar(jugador2);

jugador1.combatir(monstruo);
jugador2.combatir(monstruo);

console.log(jugador1.describir());
console.log(jugador2.describir());

