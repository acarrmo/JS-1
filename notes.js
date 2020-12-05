let cadena = "Hola Mundo";

console.log(cadena.length); //propiedad length

console.log(cadena.toUpperCase()); //método toUpperCase
console.log(cadena.toLowerCase());
console.log(cadena.indexOf("o"));
console.log(cadena.replace("Mundo","Angélica"));
console.log(cadena.substring(5));
console.log(cadena.slice(-1));
console.log(cadena.trim());//quita espacios en blanco al inicio y final si los hay
console.log(cadena.startsWith('M',5));
console.log(cadena.startsWith('J'));
console.log(cadena.endsWith('ndo'));
console.log(cadena.includes('a'));
console.log(cadena.includes('a',4));

let cadena2 = "Hola";
console.log(cadena2.repeat(3));
let nombre = "Angélica";
let apellido = "Carrillo";

console.log(`Hola ${nombre} ${apellido} `); //template strings
console.log(Math.E);
console.log(Math.PI);

let numero = 2.6;
console.log(Math.floor(numero));
