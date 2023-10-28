/*Exercise 1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/

function ucFirstLetters(str) {
    let newString = '';
    let words = str.split(' ');
    for (let word of words) {
        if (newString.length != 0) newString += ' '
        newString += word.charAt(0).toUpperCase() + word.substring(1)
    }
    return newString;
}
console.log(ucFirstLetters("los angeles"))
console.log(ucFirstLetters("new york"))
console.log(ucFirstLetters("san francisco"))

/*Exercise 2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator.*/

function truncate(str, max) {
    if (str.length > max) {
        return str.substring(0, max) + '...';
    }
    else {
        return str;
    }
}
function truncate2(str, max) {
    return (str.length > max) ? str.substring(0, max) + '...' : str;
}
console.log(truncate('This text will be truncated if it is too long', 25)) // This text will be truncat...

/*Exercise 3. Use the following animals array for the below tasks. Test each one by printing the result to the console.
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with
the beginsWith string. Try to make it work regardless of upper/lower case.*/

const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Hippopotamus');
animals.push('Rhinocerous')
console.log(animals)

animals.unshift('Penguin')
animals.unshift('Lion')
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue) {
    let halfway = animals.length / 2;
    animals[halfway] = newValue
}
console.log(animals)

function findMatchingAnimals(beginsWith) {
    return animals.filter(animal =>
        animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
}
console.log(findMatchingAnimals('h'))

/*Exercise 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'. The function should remove all dashes, and uppercase the first letter of each word after a dash.
b) Create variants of the camelCase function that use different types of for loops, and c) with and without the conditional operator.*/

function camelCase(cssProp) {
    let words = cssProp.split('-');
    let camelString = '';
    words.forEach(word => {
        if (camelString.length == 0) {
            //don't capitalise the first word
            camelString = word;
        }
        else {
            camelString += word.charAt(0).toUpperCase() + word.substring(1)
        }
    });
    return camelString;
}
const camelCase2 = (cssProp) => {
    let camelString = '';
    for (let word of cssProp.split('-')) {
        camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() +
            word.substring(1);
    }
    return camelString;
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase2('background-image')) // backgroundImage
console.log(camelCase('display')) // display

/*Exercise 5. Decimal number operations in javascript can lead to unexpected results, as in the following:
We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always usefull*/

// a) fixedTwenty + fixedTen doesn't work because toFixed returns a string, and it concatenates the two values instead of performing addition
function currencyAddition(float1, float2) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    return (wholeNumber1 + wholeNumber2) / 100
}
function currencyOperation(float1, float2, operation) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    let wholeResult = 0;
    switch (operation) {
        case '+':
            wholeResult = wholeNumber1 + wholeNumber2; break;
        case '*':
            wholeResult = wholeNumber1 * wholeNumber2; break;
        case '-':
            wholeResult = wholeNumber1 - wholeNumber2; break;
        case '/':
            wholeResult = wholeNumber1 / wholeNumber2; break;
        default:
            wholeResult = wholeNumber1 + wholeNumber2;
    }
    //divide by the same factor we multiplied by
    return wholeResult / 100;
}
function currencyOperation2(float1, float2, operation, numDecimals) {
    let factor = 10 ** numDecimals; //exponential. for numDecimals=2, would be 10 to the power of 2, or 10 * 10
    let wholeNumber1 = float1 * factor;
    let wholeNumber2 = float2 * factor;
    let wholeResult = 0;
    switch (operation) {
        case '+':
            wholeResult = wholeNumber1 + wholeNumber2; break;
        case '*':
            wholeResult = wholeNumber1 * wholeNumber2; break;
        case '-':
            wholeResult = wholeNumber1 - wholeNumber2; break;
        case '/':
            wholeResult = wholeNumber1 / wholeNumber2; break;
        default:
            wholeResult = wholeNumber1 + wholeNumber2;
    }
    //now round off any remaining decimals and divide by the same factor you multiplied by
    return Math.round(wholeResult) / factor;
}

/*Exercise 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates.
Your function should return an array containing only the unique values from duplicatesArray.
Test with the following arrays and create another one of your own.*/

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const italianFood = ['pizza', 'lasagne', 'fettucine', 'spaghetti', 'pizza', 'penne', 'fussili', 'lasagne']
function unique(duplicatesArray) {
    const uniques = [];
    duplicatesArray.forEach(element => {
        if (!uniques.includes(element)) {
            uniques.push(element);
        }
    });
    //or using a for...of
    // for (let element of duplicatesArray) {
    // if (!uniques.includes(element)) {
    // uniques.push(element);
    // }
    // }
    return uniques;
}
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores))// [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(italianFood))//[ 'pizza', 'lasagne', 'fettucine', 'spaghetti', 'penne', 'fussili' ]

/*Exercise 7. Use the array of book objects to practice the array functions for map, find and filter.
a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books
written by authors whose names start with authorInitial.
e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
Test each of your answers to the below tasks.*/

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

//a.
function getBookTitle(bookId) {
    let matchingBook = books.find(book => book.id == bookId);
    return matchingBook.title;
}
console.log(getBookTitle(3))

//b.
function getOldBooks() {
    return books.filter(book => book.year < 1950)
}
console.log(getOldBooks())

//c.
function addGenre() {
    books.map(book => book.genre = 'Classic Reads');
}
addGenre();
console.log(books);

//d.
function getTitles(authorInitial) {
    return books
        .filter(book =>
            book.author.toLowerCase().startsWith(authorInitial.toLowerCase()))
        .map(book => book.title);
}
console.log(getTitles('H'))

//e.
function latestBook() {
    let latestYear = 1900; //a value older than all books
    books.forEach(book => {
        if (book.year > latestYear) {
            latestYear = book.year;
        }
    });
    return books.find(book => book.year == latestYear);
}
console.log(latestBook())

/*Exercise 8. The code below creates a new Map object for storing names beginning with A, B, or C with their phone numbers.
a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book*/

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([ //set the values to begin with using an array
    ['David', '04332277'],
    ['Elizabeth', '04776622'],
    ['Fred', '04373737']
])
phoneBookABC.set('Caroline', '0455812941');
function printPhoneBook(contacts) {
    for (let entry of contacts) {
        console.log(entry)
    }
}
printPhoneBook(phoneBookABC)
const phoneBook = new Map(
    [...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]));
console.log([...phoneBook.keys()])

/*Exercise 9. Given the below salaries object, perform the following tasks.
a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary*/

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

//a.
function sumSalaries(salaries) {
    let total = 0;

    for (let salary in salaries) {
        total += salaries[salary];
    }

    return total;
}
console.log(sumSalaries(salaries)); //233000

//b.
function topEarner(salaries) {
    let maxEarner = '';
    let maxSalary = 0;
   
    for (let name in salaries) {
       if (salaries[name] > maxSalary) {
         maxEarner = name;
         maxSalary = salaries[name];
       }
    }
   
    return maxEarner;
   }
   console.log(topEarner(salaries)); //"Christina"

/*Exercise 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:
a) Print the total number of minutes that have passed so far today
b) Print the total number of seconds that have passed so far today
c) Calculate and print your age as: 'I am x years, y months and z days old'
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates.*/

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed today')
console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()) + 'seconds have passed today')
const birthday = new Date('1979-12-07')
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();
console.log(`I am ${years} years, ${months} months and ${days} days old`)
function daysInBetween(date1, date2) {
let differenceMS = date2 - date1;
let millisecondsPerDay = 24 * 60 * 60 * 1000;
let differenceDays = Math.floor(differenceMS / millisecondsPerDay);
return Math.abs(differenceDays);
}
console.log(`Days between ${birthday.toLocaleDateString()} and
${today.toLocaleDateString()}: ${daysInBetween(birthday, today)}`)
console.log(`Days between 2018-11-29 and 2023-11-29: ${daysInBetween(new Date('2018-11-29'), new Date('2023-11-29'))}`)