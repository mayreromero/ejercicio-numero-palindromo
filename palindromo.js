// EJERCICIO NUMERO PALINDROMO

let array_numero = [1, 2, 7, 1];
let array_inverso = [];
let i = array_numero.length -1;
let j =0

for(i ; i >= 0; i--){
   array_inverso[j] = array_numero[i];
   j++;
}
array_numero = array_numero.toString();
array_inverso = array_inverso.toString();

if(array_numero == array_inverso){
   console.log("El numero es palindromo");
}
else{
   console.log("No es un numero palindromo");
}





















































