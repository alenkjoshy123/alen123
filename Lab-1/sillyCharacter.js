// Declare and initialize variables
let characterName = "Captain Waffles";
let age = Math.floor(Math.random() * 100) + 1; // random age between 1 and 100
let isSuperhero = true;
let specialPowers = ["fly faster than light", "become invisible", "talk to animals", "shoot spaghetti from fingers", "make anyone dance", "turn into a giant marshmallow", "summon rainbows", "control the weather", "speak fluent dolphin"];
let favoriteFood = "pizza";

// Helper function to pick a random item from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a random character
function generateRandomCharacter() {
    characterName = getRandomElement([
        "Captain Waffles", "Lady Pickles", "Sir Giggles", 
        "Doctor Banana", "Major Meow", "Princess Pancake", 
        "Professor Jellybean", "Baroness Bubbles"
    ]);
    age = Math.floor(Math.random() * 100) + 1;
    isSuperhero = Math.random() > 0.5;
    specialPowers = [getRandomElement([
        "fly faster than a pizza delivery drone during a thunderstorm",
        "become completely invisible, except for their ridiculously loud shoes",
        "have full conversations with animals, especially sarcastic parrots",
        "shoot unlimited spaghetti from their fingers — marinara included",
        "make anyone within 10 feet break into spontaneous dance battles",
        "transform into a giant marshmallow with surprisingly heroic strength",
        "summon rainbows that smell like bubblegum and scream motivational quotes",
        "control the weather using only interpretive dance",
        "speak fluent dolphin, with a perfect accent and impeccable grammar"
    ])];
    favoriteFood = getRandomElement([
        "pizza", "ice cream", "tacos", 
        "sushi", "chocolate", "burgers", 
        "waffles", "donuts", "fries"
    ]);

    updateDescription();
}

// Function to update the character's description
function updateDescription() {
    let description = "";

    const heroEmojis = ["🦸‍♂️", "🦸‍♀️", "🦹‍♂️", "⚡", "💥", "🛡️", "🚀", "🌟", "🎯", "🔥", "🌈", "🥷"];
    const humanEmojis = ["😜", "🍕", "🍟", "🍩", "😎", "🛋️", "🐸", "🎉", "🍔", "🧃", "🧸", "🕺", "💤", "🎈"];

    const heroEmoji = getRandomElement(heroEmojis);
    const humanEmoji = getRandomElement(humanEmojis);
    const extraHeroEmojis = getRandomElement(heroEmojis) + " " + getRandomElement(heroEmojis);
    const extraHumanEmojis = getRandomElement(humanEmojis) + " " + getRandomElement(humanEmojis);

    if (isSuperhero) {
        // Short superhero description with more emojis
        description = `${heroEmoji} Meet <strong>${characterName}</strong>, ${age} years old and ultra-powered! Fueled by ${favoriteFood} 🍽️ and can ${specialPowers.join(", ")}. ${extraHeroEmojis} Ready to save (or confuse) the world! 🌎`;
    } else {
        // Short regular character description with more emojis
        description = `${humanEmoji} Say hi to <strong>${characterName}</strong>! ${age} years young, addicted to ${favoriteFood} 🍴 and once ${specialPowers.join(", ")}. ${extraHumanEmojis} Total goofball. Certified chaos. 🎊`;
    }

    document.getElementById("characterDescription").innerHTML = description;
}

// Functions to update character's age
function increaseAge() {
    age++;
    updateDescription();
}

function decreaseAge() {
    if (age > 1) age--;
    else alert("Atleast let him/her born, please!, can not go to past life");
    updateDescription();
}

// Function to update character name from user input
function updateNameFromInput() {
    const newName = document.getElementById("nameInput").value.trim();
    if (newName !== "") {
        characterName = newName;
        updateDescription();
    }
}

// Add event listeners
document.getElementById("generateButton").addEventListener("click", generateRandomCharacter);
document.getElementById("increaseAgeButton").addEventListener("click", increaseAge);
document.getElementById("decreaseAgeButton").addEventListener("click", decreaseAge);
document.getElementById("updateNameButton").addEventListener("click", updateNameFromInput);

// Initialize with a random character
generateRandomCharacter();

