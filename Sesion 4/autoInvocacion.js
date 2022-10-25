//funciones de autoinvocacion
/*
(function(){
    alert("Hola ");
})()

(function(nombre){
    alert("hola" + nombre)
})("marcela");


//funcion dentro de otras funciones

function a(num){
    function b(num2){
        return num2*3;
    }
    return b(num);
}

document.write(a(8));



//funciones que retornan funciones

function a(){
    alert("Hola");
    return function(){
        return alert("Johao")
    }
}

a()();

*/

//Llamados Call y Apply

function sumar(a,b){
    return a + b;
}

var c= sumar.call(c,9,4);
document.write(c);

c= sumar.apply(c,[8,6]);
document.write(c);

