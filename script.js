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
        console.log(elevetab.Prénom); // nom de l'élève
        console.log(elevetab.Point); // note de l'élève
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
    return eleves; // tableau des notes des élèves  avec les lettres correspondantes selon leurs points
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
    let nbVerifHeureux = 0;
    let tabNombreHeureux = [];
    while (nbVerifHeureux < 5) {
        let sommeHeureux = 0;
        do {
            nbVerifHeureux = nbVerifHeureux * nbVerifHeureux;
            carreNombre = nbVerifHeureux.split('');
            for (const nombreCarre of carreNombre) {
                somme += nombreCarre * nombreCarre;
            }
        } while (somme == 1)



    }

}