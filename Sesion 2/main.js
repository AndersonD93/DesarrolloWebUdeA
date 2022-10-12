let dato, resultado;

        dato=window.prompt("Nombre:","Escriba su nombre");
        resultado= `Hola, su nombre es ${dato}`;
        //document.writeln (resultado);

let info= document.getElementById("dato");
info.innerHTML= resultado;        