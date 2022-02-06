const niz = [1, 2, 6, 4, 8, 15];

let noviNiz = niz.map((x) => {
    return (x * 50) / 2
})

console.log('Rezultat od ugrađene map funkcije: ',noviNiz)



Array.prototype.mojaMapFunkcija = function(parametri) {
    const noviNiz2 = [];
    for (let i = 0; i < this.length; i++) {
        noviNiz2[noviNiz2.length] = parametri(this[i], i, this);
    }
    return noviNiz2;
}

let noviNiz2 = niz.mojaMapFunkcija((x) => {
    return (x * 50) / 2
})


console.log('Rezultat od moje map funkcije: ', noviNiz2)

