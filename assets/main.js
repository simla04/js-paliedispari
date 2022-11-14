/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


let parola = prompt("Ti chiedo di inserire qui una parola('parola')");

let parola = '!'; //posizioni indici= 0=c, 1=i, 2=a, 3=o.
let parolaReverse = ''; 
//console.log(parola.length) // lunghezza = 4

for(let i = parola.length-1; i >= 0 ; i--){
    //for scritto così = dal più frande al più piccolo; dalla fine all'inizio
    //parola.length-1= le posizioni degli indici partono da 0 per questo -1.
    //i> più lettere nella parola= più indici
    //i-- = anzichè contare in avanti , si conta all'indietro/alla rovescia
    parolaReverse += parola[i]

}
//console.log(`${parolaReverse}`);
document.writeln(`${parolaReverse}`);


















/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/










