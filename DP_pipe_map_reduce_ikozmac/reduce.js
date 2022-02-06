// (agr (prethodna vrijednost), curr (trenutna vrijednost), index, niz)
Array.prototype.mojaReduceFunkcija = function (...args) {
    let polje = this;
    let rezultat = this[0]

    for (let i = 1; i < polje.length; i++) {
        let xy = args[0](rezultat, polje[i], i, polje)
        rezultat = xy
    }
    return rezultat
}

const niz = [2, 3, 6, 4, 8, 1, 15, 22, 17, 7];


rezultat = niz.reduce((agr, curr) => {

     for(let i = 0; i < niz.length; i++){
         if(curr % 2 == 0){
            return agr + curr; 
         }
         else
            return agr;
    }
})
console.log("Rezultat ugrađene reduce funkcije: ",rezultat)


let rezultat2 = niz.mojaReduceFunkcija((x, y) => {

    for(let i = 0; i < niz.length; i++){
        if(y % 2 == 0){
           return x + y; 
        }
        else
           return x;
    }
})

console.log("Rezultat moje implementirane reduce funkcije: ",rezultat2)




