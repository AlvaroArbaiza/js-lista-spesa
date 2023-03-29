/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/


// Lista spesa (array)
let listaSpesa = [
    `Comprare il pane`,
    `Comprare il latte`,
    `Comprare le carote `,
    `Comprare la carne `,
    `Comprare il pollo `,
    `Comprare i croccantini per il cane `,
    `Comprare le padelle `,
    `Prendere i vestiti in lavanderia `,
    `Passare dalla nonna `,
    `Prendere i figli a scuola `
]

// Indice con valore a zero
let indice = 0

// Creazione ciclo while con la condizione che l'indice dovrà essere sempre più piccolo della lunghezza dell'array
while (indice < listaSpesa.length) {

    // A ogni ciclo inseriamo questi dati nell'elemento div(#lista)
    document.getElementById(`lista`).innerHTML +=
    ` 
    <li>${listaSpesa[indice]}</li>
    
    `
    // Dopo ogni giro l'indice dovrà essere aumentato di 1
    indice++;

    console.log(listaSpesa[indice])
    
}