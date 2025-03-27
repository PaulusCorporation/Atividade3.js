let nomes = ["Paulo", " Manoela", "Carlos", "Luiz", "Clara"];
console.log(nomes[2]);

nomes.push("Larissa");
nomes.unshift("Lazaro");

console.log(nomes);
console.log("Terceiro nome:", nomes[2]);

nomes.pop();

console.log(nomes);
console.log("Terceiro nome:", nomes[2]);

const numeros = [2, 4, 6, 8];

const dobrados = numeros.map(num => num * 2);

console.log(dobrados); 

const numero = [1, 3, 5, 7, 9];
const maioresQueCinco = numero.filter (num => num > 5);
console.log(maioresQueCinco);
