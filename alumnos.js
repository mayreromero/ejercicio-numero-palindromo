let alumnos = [
    {
        nombre : "Marcos",
        edad: 22,
        nota:67
    },
    {
        nombre : "Juliana",
        edad: 34,
        nota:40
    },
    {
        nombre : "Juan",
        edad: 45,
        nota:12,
    },
    {
        nombre : "Carlos",
        edad: 35,
        nota: 89
    },
    {
        nombre:"Isabel",
        edad : 22,
        nota:27
    },
    {
        nombre: "Teresa",
        edad : 31,
        nota:75
    },
    {
        nombre: "Eduardo",
        edad : 29,
        nota: 45
    },
    {
        nombre : "Carmen",
        edad : 30,
        nota :90
    },
    {
        nombre : "Daniel",
        edad : 41,
        nota : 54
    },
    {
        nombre : "Pablo",
        edad : 21,
        nota :56
    },
]

let mayor_a_menor;

mayor_a_menor = alumnos.sort(function(alum1 , alum2){
    return alum2.nota - alum1.nota
});
console.log(mayor_a_menor);

     




