const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = parseInt(prompt('Introduzca el primer número'));
let b = parseInt(prompt('Introduzca el segundo número'));
let c = parseInt(prompt('Introduzca el tercer número'));

numbers.textContent = `Los números introducidos son ${a}, ${b} y ${c}`

if(a>=b && a>=c){
  if(b>c){
    result.textContent = `El orden de mayor a menor es ${a}, ${b} y ${c}`
  }else{
    result.textContent = `El orden de mayor a menor es ${a}, ${c} y ${b}`
  }
}else if(b>=a && b>=c){
  if(a>c){
    result.textContent = `El orden de mayor a menor es ${b}, ${a} y ${c}`
  }
  else{
    result.textContent = `El orden de mayor a menor es ${b}, ${c} y ${a}`
  }
}else if(c>=a && c>=b){
  if(a>b){
    result.textContent = `El orden de mayor a menor es ${c}, ${a} y ${b}`
  }
  else{
    result.textContent = `El orden de mayor a menor es ${c}, ${b} y ${a}`
  }
}
