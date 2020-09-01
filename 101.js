// Variables
// --------

// Una variable es...
// Una variable es un espacio de memoria para almacenar valores. Podemos crearlas y a su vez también podemos asignarles un valor determinado
let contador;

// Tipos de datos
// --------------
// Numero entero
let anio = 2020
// Numero decimal
let precio = 130.23
// String
let nombre = 'Cristian'
// Booleano
let unBooleanTrue = true
let unBooleanFalse = false
// Undefined
let sinDefinir
// Null
let unNull = null

// Estructuras de datos
// -------------
// Array
let unArray = [0, 1, 2, 3, 4, 5]
// Objeto
let unObject = {
    nombre: 'Cristian',
    apellido: 'Peralta',
    edad: 31
}
//JSON
let objJson =
{
	"total_faqs": 5,
	"faqs": [
		{
			"faq_title": "¿A partir de qué edad los niños deben pagar entrada?",
			"faq_answer": "Los niños pagan entrada a partir de los 3 años.Menores de 3 años no abonan entrada mientras no ocupen una butaca adicional.Menores de 4 años tienen prohibido el ingreso a las salas 4 D y Platinum."
        },
		{
			"faq_title": "¿Cuáles son las condiciones de compra de entradas?",
            "faq_answer": "La compra de entradas de cine de DH MOVIES: a través de este sitio web y/o máquinas expendedoras de entradas (ATM), implica la aceptación por parte del cliente de todos y cada uno de los siguientes términos y condiciones."
		}
    ]
}


// console.log()
// -------------
//Muestra un mensaje en la consola web (o del intérprete JavaScript).
console.log(unArray)

// Ejecución con Node
// Para ejecutar con Node código javaScript, hace falta tener instalado NodeJs. Luego desde una terminal ejecutar 'node app.js'. Y listo.

// Operadores
// ----------

// Operadores Aritméticos
// ----------------------
// Suma
let numero1 = 10
let numero2 = 5
let suma = numero1 + numero2

// Resta
let resta = numero1 - numero2

// Multiplicación
let producto = numero1 + numero2

// División
let division = numero1 / numero2

// Incremento
let incre = numero1++

// Decremento
let decre = numero1--

// Modulo
let modulo = numero1 % numero2

// Operadores de comparación
// -------------------------
// Comparación Simple
let igual = numero1 == numero2 // false
let distinto = numero1 != numero2 // true

// Comparación Estricta
let estrictoIgual = numero1 === numero2 // false
let estrictoDistinto = numero1 !== numero2 // true

// Comparación
let mayor       = numero1 > numero2 // true
let mayorIgual  = numero1 >= numero2 // true
let menor       = numero1 < numero2 // false
let menorIgual  = numero1 <= numero2 // false


// Operadores lógicos
// ------------------
// AND
if (numero1 > numero2 && numero1 > 5){
    console.log(true)
} else {
    console.log(false)
}

// OR
if (numero1 > numero2 || numero1 > 5){
    console.log(true)
} else {
    console.log(false)
}

// NOT
if ( !(numero1 > numero2)){
    console.log(true)
} else {
    console.log(false)
}

//Operadores de concatenación
let name = 'Cristian'
let lastName = 'Peralta'
let fullName = name + ' ' + lastName

// Condicionales
// ------------------
// IF
if (numero1 > numero2){
    console.log(true)
} else {
    console.log(false)
}

// ELSE IF
if ( !(numero1 > numero2)){
    console.log('mayor que numero 2')
} else if(numero1 < 5){
    console.log('menor que 5 y menor que numero 2')
}else {
    console.log('menor que numero 2 y mayor que 5')
}

// SWITCH
let dia = 'jueves';
function finDeSemana (dia) {	
  switch (dia){
    case 'viernes':
      console.log('buen finde');
    break;
    case 'lunes':
      console.log('buena semana');
    break;
    default:
      console.log('buen dia');
    break;
  }
};

// Bucles
// ------
// While
while(1<5) {
    console.log('El número actual es ' + desde + ' y es menor a ' + hasta);
    ++desde;
}

// DO-WHILE
let Numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let desde=0;
let hayCinco=false;
do{
    if(numeros[desde]===5){
        hay5 = true;
        console.log('Se encontró un 5!');
    }
    desde++;
} while(desde<=hasta || hayCinco)

// For
// ---
let cntImpares = 0
for(i=0;i<10;i++){
    if(i%2>0){
        ++cntImpares
    }
}
console.log('la cantidad de impares es: ' + cntImpares)

// FOR IN --> para recorrer las propiedades de un objeto
let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}

for (let prop in bart){
    console.log(bart[prop])
}

// FOR OFF --> Para recorrer un array
let frase = "Nos encanta hacer la vertical";
for (const letra of frase){
    console.log(letra)
}


// Funciones
// ---------
function esPar (numero){
    if (numero % 2 ==0 ){
        return true
    }else{
        return false
    };
}

// Arrow Function
let esPar = (numero) => {
    if (numero % 2 ==0 ){
        return true
    }else{
        return false
    };
}