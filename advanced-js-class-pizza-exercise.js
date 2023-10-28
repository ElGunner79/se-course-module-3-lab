// TASK 1: Create 6 JS functions which print the pizza processing statements:
// Started preparing pizza ...
// Made the base
// Added the sauce and cheese
// Added the pizza toppings
// Cooked the pizza
// Pizza is ready
// and call those functions in sequence. Use a mix of function declarations, expressions and arrow functions.

const pizzaProcessing = function () {
    console.log("Started preparing pizza ...")
}

/*function makeBase() {
    console.log("Made the base");
}

function addSauceAndCheese() {
    console.log("Added the sauce and cheese");
}

function addToppings() {
    console.log("Added the pizza toppings");
}

function cookPizza() {
    console.log("Cooked the pizza");
}

const pizzaIsReady = () => {
    console.log("Pizza is ready");
};*/

// Task 2: Make the functions asynchronous by using setTimeout with
// different time durations, maintaining the right order.

/*function makeBase() {
setTimeout(() => {
    console.log("Made the base");
}, 1000);
}

function addSauceAndCheese() {
    setTimeout(() => {
        console.log("Added the sauce and cheese");
    }, 2000);
    }

function addToppings() {
    setTimeout(() => {
        console.log("Added the pizza toppings");
    }, 3000);
}

function cookPizza() {
    setTimeout(() => {
        console.log("Cooked the pizza");
    }, 4000);
}

const pizzaIsReady = () => {
    setTimeout(() => {
        console.log("Pizza is ready");
    }, 5000);
};*/

// pizzaProcessing();
// makeBase();
// addSauceAndCheese();
// addToppings();
// cookPizza();
// pizzaIsReady();

//Task 3: Modify the asynchronous functions to use Promises and achieve the required result.

/*function makeBase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Made the base");
            resolve();
        }, 1000);
    });
}

function addSauceAndCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Added the sauce and cheese");
            resolve();
        }, 2000);
    });
}

function addToppings() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Added the pizza toppings");
            resolve();
        }, 3000);
    });
}

function cookPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cooked the pizza");
            resolve();
        }, 4000);
    });
}

function pizzaIsReady() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pizza is ready");
            resolve();
        }, 5000);
    });
}

async function preparePizza() {
    console.log("Started preparing pizza ...");
    await makeBase();
    await addSauceAndCheese();
    await addToppings();
    await cookPizza();
    await pizzaIsReady();
}

preparePizza();*/

//Task 4: Modify the functions to use async/await and achieve the required result.

async function makeBase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Made the base");
            resolve();
        }, 1000);
    });
}

async function addSauceAndCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Added the sauce and cheese");
            resolve();
        }, 2000);
    });
}

async function addToppings() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Added the pizza toppings");
            resolve();
        }, 3000);
    });
}

async function cookPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cooked the pizza");
            resolve();
        }, 4000);
    });
}

async function pizzaIsReady() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pizza is ready");
            resolve();
        }, 5000);
    });
}

async function preparePizza() {
    console.log("Started preparing pizza ...");
    await makeBase();
    await addSauceAndCheese();
    await addToppings();
    await cookPizza();
    await pizzaIsReady();
}

preparePizza();
