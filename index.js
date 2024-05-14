"use strict";

let password = 3214;
let key;
let attempts = 0;

do{
if (attempts < 3) {
    attempts++;
    key = prompt("Ingrese la contraseña");

} else {
    alert("Bloqueo de la tarjeta");
    break;

}
}
while(key != password);
if(key === password) {
    alert("Operaciones exitosas");
}
