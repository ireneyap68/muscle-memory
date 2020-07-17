// 5 variable of difference datatype
//string
//number
//array
//boolean
//object (4 different key/value pairs)[string],[number],[array],[boolean]

let sentences = 'Hello World'
console.log(sentences)

var num = 22
console.log(num)

const foods = ['Chicken', 'Vegetable', 'Pizza', 'Fruits', 'Burger']
console.log(foods)

let itWork=  true;
console.log(itWork)

const lakers = {
    headquarters: 'Los Angeles',
    numberOfPlayers: 11,
    players: ['Anthony', 'John', 'David'],
    areGood: true
}
console.log(lakers);

// 10 functions
// 1.array 2.callback 3.string 4.object 5.boolean 6.freestyle

function displayCoolBikers(array) {
    let result = [];

    if (displayCoolBikers.length > 7) {
        result.push(bike);
    }
    return result;
}
//console.log(displayCoolBikes(motorcycles));

function removeFromArray(callback, array) {
    let result = callback(array)[0];
    console.log(result);
}
//removeFromArray(displayCoolBikers, motorcycles);
function printSentences(string){
    console.log(string);
}
printSentences(sentences);
printSentences(name);

function printPlayers(object){
    console.log(object.players);
}
printPlayers(lakers);

function printEachPlayer(object){
    object.players.forEach(eachPlayer => {
        console.log(eachPlayer);
    })
}
printEachPlayer(lakers);

function doesThisReallyWork(boolean) {
    if(boolean) {
        console.log('Work!');
    } else {
        console.log('Not!')
    }
}
doesThisReallyWork(doesThisReallyWork);

/////

const sectionOne = document.getElementById('section-one');
console.log(sectionOne)

const sectionTwo = document.getElementById('section-two')
console.log(sectionTwo);

const sectionThree = document.querySelector('#section-three');
console.log(sectionThree);

const sectionFour = document.querySelector('#section-four');
console.log(sectionFour);

const sectionFive = document.querySelector('#section-five');
console.log(sectionFive);

sectionOne.textContent = 'Lakers';
sectionTwo.textContent = 'Hello';
sectionThree.textContent = 'World';
sectionFour.textContent = 'damn hot';
sectionFive.textContent = 'really cool';

const paraOne = document.querySelector(' .paragraph-one');
console.log(paraOne);
paraOne.textContent = 'Maggie';

const paraTwo = document.querySelector(' .paragraph-two');
console.log(paraTwo);
paraTwo.textContent = 'Lim';

const paraThree = document.querySelector(' .paragraph-three');
console.log(paraThree);
paraTwo.textContent = 'Raven';

const paraFour = document.querySelector(' .paragraph-four');
console.log(paraFour);
paraFour.textContent = 'Rainning';

const paraFive = document.querySelector(' .paragraph-five');
console.log(paraFive)
paraFive.textContent = 'Forest';

//create new div in js only:

const containerSix = document.createElement('div');
containerSix.classList.add('container-six');
console.log(containerSix);

const sectionSix = document.createElement('h2');
console.log(containerSix);
sectionSix.setAttribute('id', 'section-six');

sectionSix.textContent = 'Rocket';
console.log(sectionSix);

const paraSix = document.createElement('p');
paraSix.classList.add('paragraph-six');
paraSix.textContent = 'Kindness';
console.log(paraSix);

const body = document.querySelector('body');
console.log(body);

//pin it out, show in html
body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);

//create div-7 by own:
// 1. create no7-container and add a class for it!
const containerSeven = document.createElement('div');
containerSeven.classList.add('container-seven');
console.log(containerSeven);

//2. create a section with adding id and text content to container7
const sectionSeven = document.createElement('h2');
sectionSeven.setAttribute('id', 'section-seven');
sectionSeven.textContent = 'Honey7';
console.log(sectionSeven);

//3. create a paragraph with class and text also
const paraSeven = document.createElement('p');
paraSeven.classList.add('paragraph-seven');
paraSeven.textContent = 'Happiness 7';
console.log(paraSeven);


// 4. last, make it show in html with appending each 
body.appendChild(containerSeven);
containerSeven.appendChild(sectionSeven);
containerSeven.appendChild(paraSeven);
