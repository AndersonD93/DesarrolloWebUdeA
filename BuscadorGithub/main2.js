
/*funcion anonima

let saludo = function(){
    return "hola </br>"
}

document.write(saludo());

//funciones arrow o flecha

const saludo2 = (nombre2)=>{
    return "hola "+nombre2 +"</br>" ;
}

document.write(saludo2("johao"));

//funcion predefinida

let num ="8";
let suma=parseint(num)+5;
document.write(suma);


//funcion de autoinvocacion

(function (){
    alert("Hola a todos");
})()


(function(nombre){
    alert("hola"+ nombre);
})("Johao");



//funcion dentro de otra funcion

function a(num){
    function b(num2){
        return num2*3
    }
    return b(num);
}

document.write(a(8));


//funciones que regresan funciones

function a (){
    alert("hola");
    return function (){
        return alert("anderson");
    }
}

a()();

*/

//Llamados Call y Apply

function sumar(a,b){
    return a+b;
}


var c= sumar.call(c,9,4);
document.write(c);

c = sumar.apply(c,[8,6,7]);
document.write(c);
