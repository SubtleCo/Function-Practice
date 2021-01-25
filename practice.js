const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7;
    return ageInDogYears;
}

const dogAge = calculateAgeInDogYears(45);
// console.log(dogAge);

//==================================Best In Show====================================//

const bestInShow = (breed) => {
    if (breed === "meow") return "I like cats";
    return `My favorite dog breed is ${breed}`;
}

const myFavorite = bestInShow("Frodo")
// console.log(`When it comes to pets, ${myFavorite}`)

//==================================Addition====================================//

const add = (x,y,z) => {
    const sum = x + y + z
    console.log(sum);
}

//==================================Self Driving Cars====================================//

const go = (direction, speed) => {
    console.log(`The car is moving ${direction} at ${speed} mph.${speed > 75 ? " SLOW DOWN!" : ""}`);
}

go("forward",74);
go("starward",7600);

//==================================Evens or Odds====================================//

const evenOrOdd = (number) => {
   return (number % 2 === 0 ? "Even" : "Odd") 
}

// console.log(evenOrOdd(3));

//==================================Double Functions====================================//

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const filterOutK = (wordsArray) => {
    const filteredArray = [];
    for (const word of wordsArray) {
        if (!word.startsWith("k")) filteredArray.push(word)
    }
    return filteredArray;
}

const filteredWords = filterOutK(words);

const createSentenceFrom = (array) => {
    return `${array.join(' ')}.`;
}
const sentence = createSentenceFrom(filteredWords);
// console.log(sentence);

//==================================Fisherman====================================//

const goFish = (random = Math.floor(Math.random() * 3)) => {
    const success = "Sven hooked a tuna! :)";
    const failure = "Sven came up empty-handed. :(";
    return random > 1 ? success : failure;
}

// console.log(goFish());

//==================================Fast Food====================================//

const orderMeal = (sandwich, side, drink, desert) => {
     const orderObject = {
         sandwich: sandwich,
         side: side,
         drink: drink,
         dessert: desert
     }
     return orderObject;
}

const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")

// console.log(takeOutBag);

//==================================Chores====================================//

const oil = (person) => {
    return `${person.firstName} ${person.lastName} oiled the mower`
}
const mow = (person) => {
    return `${person.firstName} ${person.lastName} mowed the lawn`
}
const cook = (person) => {
    return `${person.firstName} ${person.lastName} cooked a single cabbage`
}
const clean = (person) => {
    return `${person.firstName} ${person.lastName} cleaned the gutters`
}
const trash = (person) => {
    return `${person.firstName} ${person.lastName} took out the trash`
}
const sweep = (person) => {
    return `${person.firstName} ${person.lastName} swept the ceiling and the walls but not the floor`
}

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
     return `On ${day}, ${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}.`;
}

const bob = {
    firstName: "Donald",
    lastName: "McLelland"
}
// console.log(dayPlanner(mow, oil, cook, bob, "Monday"));
