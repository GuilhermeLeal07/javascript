// 01 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -123);


// 02 - Operações Aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 2);
console.log(10 / 2);

console.log(5 + 4 * 2);


// 03 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);


// 04 - Strings
console.log("Um texto");
console.log(`Mais um texto`);
console.log(`13`);

console.log(typeof "Um texto");
console.log(typeof `Mais um texto`);


// 05 - Símbolos especiais em Strings
console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");


// 06 - Concatenação
console.log("Oi, " + "tudo" + "bem?");
console.log(`Testando` + `com` + `crase!`);


// 07 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer expressão aqui ${console.log("teste")}`);


// 08 - Boolean
console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);


// 09 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);


// 10 - Igualdade e Identidade
console.log(9 == "9");
console.log(9 + "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");


// 11 - Operadores Lógicos
// && = E | || = OU | ! = NÃO
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Gui" === 1);
console.log(5 > 2 || "Gui" === 1);

console.log(!true);
console.log(!(5 > 2));


// 12 - Empty Values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);


// 13 - Conversão Automática de Tipos
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);
