var nombres= ["Maria","Jose","Carlos","Margarita","Alejandra","Pedro","Susana"];
var notas=[];

for(let i=0;i<nombres.length;i++){
    notas.push(5);
}
// muestra el listado actual de los estudiantes
function mostrar(){
document.write(`<h2>Notas actuales:</h2>`)
for(let i=0; i<nombres.length;i++){
    document.write(`${i} - ${nombres[i]}: ${notas[i]} <br>`);
}

}
// muestra la actualización de la nueva nota
function modificar(numAlumno){
    nuevaNota= prompt('introduzca su nueva nota:');
    valorNota= parseFloat(nuevaNota);
    notas[numAlumno]=valorNota;
}
