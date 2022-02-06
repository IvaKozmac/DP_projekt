const niz = [1, 5, 2, 4, 8, 15];

function dodaj10(parametar) {
    let noviNiz = [];
    for (let i = 0; i < parametar.length; i++) {
        noviNiz[i] = parametar[i] + 10;
    }
    console.log("Novi niz:", noviNiz)
    return noviNiz;
}

function sortiraj(parametar) {
    let sortiraniNiz = [];
    for (let i = 0; i < parametar.length; i++) {
        sortiraniNiz = parametar.sort();
    }
    console.log("Sortirani niz:", sortiraniNiz)
    return sortiraniNiz;
}

function pretvoriUHex(parametar) {
    let pretvorba = [];
    for (let i = 0; i < parametar.length; i++) {
        pretvorba[i] = parametar[i].toString(16);
    }
    console.log("Pretvorba: ", pretvorba)
    return pretvorba;
}

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

let rezultat = pipe(
    dodaj10,
    sortiraj,
    pretvoriUHex
)(niz);

console.log("Rezultat od ugrađene pipe: ", rezultat, "\n")  






let mojaPipeFunkcija = (...funkcije) => (vrijednost) => {
    let rezultat2;

    for (let i = 0; i < funkcije.length; i++) {
        if (i == 0) {
            rezultat2 = funkcije[i](vrijednost)
        } else {
            rezultat2 = funkcije[i](rezultat2)
        }
    }

    return rezultat2
}

let rezultatPipea = mojaPipeFunkcija(dodaj10, sortiraj, pretvoriUHex)(niz);

console.log("Rezulat od moje pipe funkcije: ", rezultatPipea)
