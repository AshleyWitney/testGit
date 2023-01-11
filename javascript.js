console.log('Hello, world!')

const operand = 12;
const operand2 = 45;

let result = operand + operand2;

console.log("resultat de" + operand + "+" + operand2 + "=" + result);
b+= a;



let aPerson = { 
	name: 'Jean',
	age: 35,
	gender: 'masculin',
	interest: ['musiquetet', 'Jeux videos'],
};

aPerson.sayHello = function(){console.log('Bonjour! je suis' + this.name + '.');};
aPerson.sayHello();
