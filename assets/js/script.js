// // funcion multiplicacion
// function multiplicacion(n) {
//   for (let i = 1; i <= n; i++) {
//     let multiplicacionResultado = i * n;
//     console.log(`${i} x ${n} = ${multiplicacionResultado}`);
//   }
//   //calcular factorial
//   function factorial(n) {
//   let resultadoFactorial = 1; //inicializar variable local tipo acumulador para factorial
//   for (let i = n; i > 0; i--) {
//     resultadoFactorial = resultadoFactorial * i;
//   }
//   console.log(
//     "Factorial dentro de funcion, de " + num1 + " es: " + resultadoFactorial
//   );
// }

// //funcion para validar que un numero entero este entre 1 y 20

// function validarNumero(n) {
//   if (n < 1 || n > 20) {
//     //mostrar error en caso de que el numero ingresado no este en el rango
//     let mensajeError = "El número debe estar entre el 1 y el 20";
//     alert(mensajeError);
//   } else {
//     // ejecuta funcion multiplicacion
//     multiplicacion(numUsuario);
//   }
// }
// //funcion para solicitar  al usuario introducir un numero
// function solicitaNumero() {
//   numUsuario = prompt("Por favor, introduce un número entre el 1 y 20");
//   validarNumero(numUsuario);
// }

// // funcion factorial
// function factorial(n) {
//   // return elFactorial;
// }

// solicitaNumero();

let desafio = () => {
  const numeroUsuario = Number(prompt("Ingrese un numero entre 1 y 20"));
  if (numeroUsuario >= 1 && numeroUsuario <= 20) {
    //multiplicaicon desde 1 hasta n
    let multiplicacion = 1;
    for (let i = 1; i <= numeroUsuario; i++) {
      multiplicacion *= i;
      console.log(`${numeroUsuario} x ${i} = ${multiplicacion}`);
    }
    //factorial de numero n
    let factorial = 1;
    for (let i = 1; i <= numeroUsuario + 1; i++) {
      factorial = factorial * i;
      console.log(`El factorial de ${i} es: ${factorial}`);
    }
  } else {
    alert("Por favor, ingrese un número entre el 1 y el 20");
    return;
  }
};
desafio();
