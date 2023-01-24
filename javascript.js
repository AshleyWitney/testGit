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


let day;
switch (new Date().getDay()) {
  case 0:
    day = "Dimnanche";
    break;
  case 1:
    day = "Lundi";
    break;
  case 2:
     day = "Mardi";
    break;
  case 3:
    day = "Mercredi";
    break;
  case 4:
    day = "Jeudi";
    break;
  case 5:
    day = "Vendredi";
    break;
  case 6:
    day = "Samedi";
}
console.log("Aujourd'hui nous sommes " + day);
