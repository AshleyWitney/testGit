console.log('Hello, world!')

const a = 12;
let b = 45;

b+= a;
console.log("Le résultat de a + b = " +b);



let aPerson = { 
	name: 'Jean',
	age: 35,
	gender: 'masculin',
	interest: ['musiquetet', 'Jeux videos'],
};

aPerson.sayHello = function(){console.log('Bonjour! je suis' + this.name + '.');};
aPerson.sayHello();