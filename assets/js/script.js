const programa = () => {};
// funcion multiplicacion
function multiplicacion(n) {
  for (let i = 1; i <= numUsuario; i++) {
    let multiplicacionResultado = i * numUsuario;
    console.log(`${i} x ${numUsuario} = ${multiplicacionResultado}`);
    factorial(i);
  }
}

//funcion para validar que un numero entero este entre 1 y 20

function validarNumero(n) {
  if (n < 1 || n > 20) {
    //mostrar error en caso de que el numero ingresado no este en el rango
    let mensajeError = "El número debe estar entre el 1 y el 20";
    alert(mensajeError);
  } else {
    // ejecuta funcion multiplicacion
    multiplicacion(numUsuario);
  }
}
//funcion para solicitar  al usuario introducir un numero
function solicitaNumero() {
  numUsuario = prompt("Por favor, introduce un número entre el 1 y 20");
  validarNumero(numUsuario);
}

// funcion factorial
function factorial(n) {
  let elFactorial = 1; //inicializar variable local tipo acumulador para factorial
  for (let i = n; i > 0; i--) {
    elFactorial = elFactorial * i;
    console.log("Factorial de " + i + " es: " + elFactorial);
  }

  // return elFactorial;
}

solicitaNumero();
