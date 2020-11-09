var operandoA = +0;
var operador = "";

/*FUNCIONES COMUNES*/
const vaciar = () => {
  document.getElementById("pantalla").value = "";
};

const rellenar_info = (num) => {
  let mensaje = document.getElementById("info");
  if (num < 100) {
    mensaje.innerHTML = "Info: El resultado es menor que 100";
  } else if (num <= 200) {
    mensaje.innerHTML = "Info: El resultado está entre 100 y 200";
  } else if (num > 200) {
    mensaje.innerHTML = "Info: El resultado es superior a 200";
  } else {
    mensaje.innerHTML = "Error";
  }
};

const validar = (value) => {
  let num = document.getElementById("pantalla");
  if (isNaN(value)) {
    return false;
  } else {
    return true;
  }
};

const validarCSV = (lista) => {
  let num = document.getElementById("pantalla");
  for (i = 0; i < lista.length; i++) {
    if (!validar(+lista[i])) {
      num.value = "Error";
      return false;
    }
  }
  return true;
};

/* OPERACIONES UNITARIAS */
const cuadrado = () => {
  let num = document.getElementById("pantalla");
  if (validar(num.value)) {
    num.value = num.value * num.value;
  } else {
    num.value = "Error";
  }
  rellenar_info(num.value);
};

const mod = () => {
  let num = document.getElementById("pantalla");
  if (validar(num.value) && num.value < 0) {
    num.value = -num.value;
  } else if (validar(num.value) && num.value > 0) {
    num.value = num.value;
  } else {
    num.value = "Error";
  }
  rellenar_info(num.value);
};

const fact = () => {
  let num = document.getElementById("pantalla");
  let factorial = 1;
  if (validar(num.value)) {
    if (num.value < 0) factorial = 0;
    for (let i = num.value; i >= 1; i--) {
      factorial *= i;
    }
    num.value = factorial;
  } else {
    num.value = "Error";
  }
  rellenar_info(num.value);
};

/* OPERACIONES BINARIAS */
const operacionBinaria = (operacion) => {
  let num = document.getElementById("pantalla");
  //Se guarda el número en la variable global
  if (validar(num.value)) {
    operandoA = +num.value;
  } else {
    num.value = "Error";
  }
  //Se guarda la operación en la variable global
  operador = operacion;
};

const eq = () => {
  let num = document.getElementById("pantalla");
  if (validar(num.value)) {
    switch (operador) {
      case "suma":
        num.value = operandoA + +num.value;
        break;
      case "resta":
        num.value = operandoA - +num.value;
        break;
      case "multiplicacion":
        num.value = operandoA * +num.value;
        break;
      case "div":
        num.value = operandoA / +num.value;
        break;
      case "resto":
        num.value = operandoA % +num.value;
        break;
      case "potencia":
        num.value = operandoA ** +num.value;
        break;
    }
  } else {
    num.value = "Error";
  }
};

/* OPERACIONES EN FORMATO CSV */
const sumatorio = () => {
  let num = document.getElementById("pantalla");
  let lista = num.value.split(",");
  let suma = 0;
  if (validarCSV(lista)) {
    for (i = 0; i < lista.length; i++) {
      suma += +lista[i];
    }
    num.value = suma;
    rellenar_info(num.value);
  }
};

const ordenar = () => {
  let num = document.getElementById("pantalla");
  let lista = num.value.split(",");
  if (validarCSV(lista)) {
    num.value = lista.sort((a, b) => a - b);
  } 
};

const revertir = () => {
  let num = document.getElementById("pantalla");
  let lista = num.value.split(",");
  if (validarCSV(lista)) {
    num.value = lista.reverse();
  }
};

const quitar = () => {
  let num = document.getElementById("pantalla");
  let lista = num.value.split(",");
  if (validarCSV(lista)) {
    lista.pop();
    num.value = lista;
  }
};
