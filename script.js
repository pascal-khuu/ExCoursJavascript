function DepositProfit(deposit, rate, threshold) {
    let balance = deposit;
    let nb = 0;
    while (balance < threshold) {
        balance = balance + balance * (rate / 100);
        nb++;
        console.log(balance);
    }
    return nb;
}

function SumOddFiboNumber(numMax) {
    let result = 0;
    let num = 0,
        num1 = 1,
        somme = 1; // F1+F0 de Fibonnaci pour n<2
    while (somme < numMax) {

        console.log('result1:', result);
        result = num + num1; // Fn de Fibonnaci pour n>=2
        console.log('result2:', result);
        num = num1;
        num1 = result;
        console.log('num -> num1:', num);
        console.log('num1 -> result:', num1);
        if (result % 2 !== 0) {
            somme += result;
            console.log('somme:', somme);
        }

    }
    return somme;
} // faux ce n'est pas somme qui doit dépasser numMax(condition de sortie) mais result ne doit pas dépasser numMax.

function sumOddFiboNumber2(numMax) {
    let tab = [];
    tab[0] = 0;
    tab[1] = 1;
    let nbtab = 2,
        sommeImpair = 1;
    let bool = true;

    while (bool) {
        tab[nbtab] = tab[nbtab - 1] + tab[nbtab - 2];
        if ((tab[nbtab] % 2) !== 0) {
            sommeImpair += tab[nbtab];

        }
        if (tab[nbtab] + tab[nbtab - 1] <= numMax) {
            bool = true;
        } else {
            bool = false;
        }
        console.log(tab);
        console.log("tabn", tab[nbtab]);

        console.log("tabn-2", tab[nbtab - 2]);
        console.log("tabn-1", tab[nbtab - 1]);

        nbtab++;
        console.log("nbtab", nbtab);
        console.log("sommeimpair", sommeImpair);



    }
    return sommeImpair;
}

function CenturyFromYear(year) {
    return Math.ceil(year / 100);

}

function SortByLength(inputArray) {
    // let inputLength = [];
    // for (let i = 0; i <= inputArray.length - 1; i++) {
    //     inputLength.push({ 'longueur': inputArray[i].length, 'nom': inputArray[i] });
    // }
    // trier selon la longueur associé à un nom la tableau temporaire inputLength
    inputArray.sort(function(a, b) {
        return a.length - b.length;
    })
    return inputArray;

}

function LargestNumber() {
    let tab = [2, 4, -1, 28, 3, -10, 29, 12, 21 - 3]
    let max = 0;
    for (const parcours of tab) {
        if (max < parcours) {
            max = parcours;
        }
    }
    return max;
}


function CountVowelConsonant(inputString) {
    let somme = 0;
    let string = inputString.toString();
    for (let i = 0; i <= string.length - 1; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            somme++;
        } else {
            somme += 2;
        }
    }
    return somme;
}


function NoterLesEleve() {
    let tableauNoteEleves = [];
    let eleves = [{
            'Prénom': 'Luna',
            'Point': 73,
            'Note': ''
        },
        {
            'Prénom': 'Joe',
            'Point': 80,
            'Note': ''
        },
        {
            'Prénom': 'Thomas',
            'Point': 79,
            'Note': ''
        },
        {
            'Prénom': 'Raman',
            'Point': 45,
            'Note': ''
        },
        {
            'Prénom': 'Alexandra',
            'Point': 92,
            'Note': ''
        },
        {
            'Prénom': 'Jeanne',
            'Point': 42,
            'Note': ''
        }
    ];

    for (const elevetab of eleves) {
        if (elevetab.Point < 60) {
            elevetab.Note = 'E';
        } else if (elevetab.Point < 70) {
            elevetab.Note = 'D';
        } else if (elevetab.Point < 80) {
            elevetab.Note = 'C';
        } else if (elevetab.Point < 90) {
            elevetab.Note = 'B';
        } else if (elevetab.Point < 100) {
            elevetab.Note = 'A';
        } else {
            elevetab.log(`il n\'ya pas d\'attribution de note pour l'élève ${elevetab.Prénom}`);
        }
    }
    return eleves;
}

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i, ':FizzBuzz');
        } else if (i % 3 == 0) {
            console.log(i, ':Fizz');
        } else if (i % 5 == 0) {
            console.log(i, ':Buzz');
        }
    }
}

function HappyNumber() {
    let nbHeureux = 1;
    let tabNombreHeureux = [];
    while (tabNombreHeureux.length < 5) {
        let compteur = 0;
        do {
            compteur = sumCarreeChiffre(nbHeureux);
            console.log('compteur', compteur);

            nbHeureux = compteur;
            console.log('nbheureux', nbHeureux);
        } while (compteur !== 46 && compteur !== 37 && compteur != 58 && compteur !== 89 && compteur != 145 && compteur !== 42 & compteur !== 20 && compteur != 4 && compteur !== 1)

        if (compteur == 1) {
            tabNombreHeureux.push(nbHeureux);
        }
        nbHeureux++;
    }
    return tabNombreHeureux;
}


function sumCarreeChiffre(nb) {
    let somme = 0;
    nb = nb * nb;
    let carreNombreString = nb.toString().split('');
    for (let i = 0; i <= carreNombreString.length - 1; i++) {
        somme += parseInt(carreNombreString[i]) * parseInt(carreNombreString[i]);
        console.log('somme', somme);
    }
    return somme;
}