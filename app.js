// 100-SAVOL

// function Namuna(input) {
//     let parts = input.split('*');
//     let element = parts[0];
//     let count = parseInt(parts[1]);

//     let result = '';
//     for (let i = 0; i < count; i++) {
//         result += '<' + element + '></' + element + '>';
//     }

//     return result;
// }

// console.log(Namuna("div*2"));
// console.log(Namuna("p*1"));
// console.log(Namuna("li*3"));

// 101-SAVOL

// function namuna(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// let son = +prompt("Butun son kiriting:");
// let natija = namuna(son);

// alert("Natija: " + natija);


// 102-SAVOL

// function Namuna(son, object) {
//     return son >= object.min && son <= object.max;
// }

// let son = +prompt("Butun sonni kiriting:");
// let min = +prompt("Objectning min qiymatini kiriting:");
// let max = +prompt("Objectning max qiymatini kiriting:");

// let object = { min: min, max: max };

// let natija = Namuna(son, object);

// alert(natija);



// 103-SAVOL

// function Namuna(son) {
//     let kvadrat = son * son;
//     let oxirgiRaqam = kvadrat % 10;
//     return oxirgiRaqam == son;
// }

// let son = +prompt("Butun sonni kiriting:");
// let natija = Namuna(son);
// alert(natija);


// 104-SAVOL

// function Namuna(massiv) {
//     let yangiMassiv = [];
//     for (let i = 0; i < massiv.length; i++) {
//         yangiMassiv.push(massiv[i] + i);
//     }
//     return yangiMassiv;
// }

// let massiv = prompt("Massivni kiriting, elementlarni vergul bilan ajrating:");
// massiv = massiv.split(',').map(Number);

// let natija = Namuna(massiv);

// alert("Yangi massiv: " + natija);


// 105-SAVOL

// function Namuna(ichimliklar) {
//     let shakarliIchimliklar = [];
//     for (let i = 0; i < ichimliklar.length; i++) {
//         let ichimlik = ichimliklar[i].toLowerCase();
//         if (ichimlik !== "cola" && ichimlik !== "49" && ichimlik !== "fanta") {
//             shakarliIchimliklar.push(ichimliklar[i]);
//         }
//     }
//     return shakarliIchimliklar;
// }

// console.log(Namuna(["cola", "water"]));


// 107-SAVOL

// function Namuna(son) {
//     let sonStr = son.toString();
//     let raqamlar = sonStr.split('').map(Number);
//     let maxRaqam = Math.max(...raqamlar);
//     let tartib = sonStr.length - raqamlar.indexOf(maxRaqam) - 1;
//     let natija = '';

//     for (let i = 0; i < sonStr.length; i++) {
//         if (i !== tartib) {
//             natija += sonStr[i];
//         }
//     }

//     natija += maxRaqam;
//     return parseInt(natija);
// }

// let son = +prompt("Istalgan sonni kiriting:");
// let natija = Namuna(son);
// alert("Eng katta hosil bo'lishi mumkin bo'lgan son: " + natija);



// 108-SAVOL

// function Namuna(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// alert(Namuna(5, 10));


// 109-SAVOL


// function NarissistikSon(son) {
//     let sonStr = son.toString();
//     let daraja = sonStr.length;
//     let summa = 0;
    
//     for (let i = 0; i < daraja; i++) {
//         summa += Math.pow(parseInt(sonStr[i]), daraja);
//     }
    
//     return summa === son;
// }

// console.log(NarissistikSon(153));

