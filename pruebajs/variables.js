var nombre = "Angel";

// declarar
var edad;
// inicializar
edad = 30;

var elementos = ["Computadora", "Celular"]; 

var persona = {
    nombre: "Diego",
    edad: 30
}

// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

// Coersión implícita (no la uses)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false

// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true

Boolean([]) // true
Boolean({}) // true