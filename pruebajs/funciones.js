// Declarativas
/* Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:*/

function miFuncion() {
    return 3;
}

miFuncion();

// Expresión
/* Expresión de función:
En la expresión de función, la declaración se inicia con la palabra reservada var, 
donde se generará una variable que guardará una función anónima. */

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

/*Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. 
Ya que el hoisting solo se aplica en las palabras reservadas var y function.
Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función 
antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla 
primero, y después mandarla llamar.*/

 function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}
undefined
saludarEstudiantes("Angel");
VM253:2 Angel
undefined
function saludarEstudiantes(estudiante) {
    console.log("Hola"estudiante);
}
VM344:2 Uncaught SyntaxError: missing ) after argument list
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}
undefined
saludarEstudiantes("Angel");
VM431:2 Hola Angel 