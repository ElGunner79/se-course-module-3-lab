//Exercise 1.
console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(!true) // false
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log(" -9 " + 5) // -9 5
console.log(" -9 " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(" \t \n" - 2) // -2

/*Exercise 2. Which of the below are not giving the right answer? Why are they not correct? How can we
fix them?*/
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four; //34 - Wrong because + concatenates two strings
let addition2 = Number(three) + Number(four); //Fixed - Converted strings to numbers
let addition3 = parseInt(three) + parseInt(four); //Fixed – Converted strings to integers
let multiplication = three * four; // 12 - Right because * converts strings to numbers
let division = three / four; // 0.75 - Right because / converts strings to numbers
let subtraction = three - four; // -1 - Right because - converts strings to numbers
let lessThan1 = three < four; // True - Right because 3 comes before 4 alphabetically
let lessThan2 = thirty < four; //True - Wrong because 30 comes before 4 alphabetically
let lessThan2_fixed = Number(thirty) < Number(four); //Fixed - Converted strings to numbers
let lessThan2_fixed2 = parseInt(thirty) < parseInt(four); //Fixed - Converted strings to integers

//Exercise 3. Which of the following console.log messages will print and why?
if (0) console.log('#1 zero is true') //Doesn't print - Zero is equivalent to false
if ("0") console.log('#2 zero is true') //Prints - Strings are equivalent to true
if (null) console.log('null is true') //Doesn't print - Null is equivalent to false
if (-1) console.log('negative is true') //Prints - Non-zero (negative) number is equivalent to true
if (1) console.log('positive is true') //Prints - Non-zero (positive) number is equivalent to true

/*Exercise 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do?*/
let a = 7, b = 18;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10';
//+= adds on to the existing value "result"

/*Exercise 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.*/
function getGreeting(name) {
    return 'Hello ' + name + '!';
}
// //a) function expression syntax:
const getGreetingA = function (name) {
    return 'Hello ' + name + '!';
};
// //b) arrow function syntax:
const getGreetingB = (name) => 'Hello ' + name + '!';

console.log(getGreeting('Samwise Gamgee'))
console.log(getGreetingA('Samwise Gamgee'))
console.log(getGreetingB('Samwise Gamgee'))

/*Exercise 6. a) Complete the inigo object by adding a lastName property and including it in the greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.*/

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers == 6 ?
        'You killed my father. Prepare to die.' : 'Nice to meet you.'
}
inigo.greeting(westley)
inigo.greeting(rugen)

/*Exercise 7. The following object represents a basketball game and keeps track of the score as the game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works.
b) Add a new method to print the full time final score.
c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate
to the score. Include the foul count in the half time and full time console messages.
d) Test your object by chaining all the method calls together in different combinations.*/

const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    },
    halfTime() {
        console.log(`Halftime score is ${this.score} points. ${this.fouls} fouls committed.`);
        return this;
    },
    fullTimeScore() {
        console.log(`Final score is ${this.score} points. ${this.fouls} fouls committed.`);
        return this;
    }
}

basketballGame.basket().foul().freeThrow().freeThrow().basket().threePointer().halfTime().
    basket().basket().foul().freeThrow().threePointer().threePointer().foul().freeThrow().fullTimeScore();

/**Exercise 8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.*/

//a.
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
//b.
const caracas = {
    name: 'Caracas',
    population: '2.082 million',
    language: 'Spanish',
    elevation: '870 m',
    area: '433 km2'
}
function printCityProps(cityObj) {
    for (cityProp in cityObj) {
        console.log(cityProp + ' = ' + cityObj[cityProp])
    }
}
printCityProps(sydney)
printCityProps(caracas)

/*Exercise 9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
//a.
let moreSports = teamSports;
moreSports.push('AFL');
moreSports.unshift('Rugby')

let dog1 = 'Bingo';
//b.
let dog2 = dog1; dog2 = 'Bluey';

let cat1 = { name: 'Garfield', breed: 'Tabby' };
//c.
let cat2 = cat1; cat2.name = 'Tom'

//d.
console.log(teamSports) //Changed because arrays are stored by reference, and moreSports points to the same memory location
console.log(dog1) //Hasn't changed because primitives like strings are stored by value, and the values are different
console.log(cat1) //Changed because objects are stored by reference, and cat2 points to the same memory location

//e.
let moreSports2 = [...teamSports]
moreSports2.push('Soccer')
console.log(teamSports) //Does not include Soccer because moreSports2 was created using a shallow clone

//f.
let cat3 = { ...cat1 }
cat3.name = 'Silvester'
console.log(cat1) // still set to Garfield because cat3 was created using a clone that references a different memory location

/*Exercise 10. The following constructor function creates a new Person object with the given name and age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and
age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age >= 16
    this.cantDrive = () => this.age <= 16
}
let person1 = new Person('John', 30)
let person2 = new Person('Jane', 24)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        return this.age >= 16;
    }   
}
let person3 = new Person('James', 10)
console.log(person1)
console.log(person2)
console.log(person3)
if (person1.canDrive()) console.log(person1.name + ' is ' + person1.age + ' and is old enough to drive')
if (person2.canDrive()) console.log(person2.name + ' is ' + person2.age + ' and is old enough to drive')
if (person3.canDrive()) console.log(person3.name + ' is ' + person3.age + ' and is old enough to drive')
if (person3.cantDrive()) console.log(person3.name + ' is ' + person3.age + ' and is not old enough to drive')