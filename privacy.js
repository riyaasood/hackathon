

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "1234567890";
const symbols = "!@#$%^&*";
const mix = lowercase + uppercase + numbers + symbols;

const postalCodes = {
    "Central Toronto": ["M2H", "M4N", "M4P", "M4R", "M4S", "M4T", "M4V", "M5N", "M5P", "M5R"],
    "Downtown Toronto": ["M4W", "M5J", "M5X", "M5V", "M5T", "M5S", "M5L", "M5K", "M5H", 
                        "M4X", "M5G", "M5E", "M5C", "M5B", "M5A", "M4Y", "M6G"]
};

const words = [
    "previous",
    "purple",
    "coil",
    "slip",
    "walk",
    "root",
    "hope",
    "aspiring",
    "person",
    "marble",
    "cherry",
    "actually"
];

const mailEndings = ["gmail.com", "outlook.com", "hotmail.com", "fastmail.com"];


function randomPostalCode() {

    //generate the first half of the postal codes
    const keys = Object.keys(postalCodes);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    const randCodeList = postalCodes[randKey];
    const randCode = randomFromArray(randCodeList);

    //second half -randomly generated
    const secondHalf = randomFromString(numbers, 1) + 
                        randomFromString(uppercase, 1) + 
                        randomFromString(numbers, 1);
    
    //everything put together
    const fullCode = "(" + randKey + ")   " + randCode + " " + secondHalf;


    return fullCode;
}

function randomFromString(string, long) {
    let randStr = "";
    const strLength = string.length;
    for (let i = 0; i < long; i++) {
        randStr += string[Math.floor(Math.random() * strLength)];
    }
    return randStr;
}

function randomFromArray(arr) {
    const randVal = Math.floor(Math.random() * arr.length);
    const arrVal = arr[randVal];
    return arrVal;
}

function randomPhoneNumber(areaCode) {
    const firstThree = randomFromString(numbers, 3);
    const secondFour = randomFromString(numbers, 4);
    const num = "+1 " + areaCode + "-" + firstThree + "-" + secondFour;
    return num;
}

function generatePassword() {
    document.getElementById("password").innerHTML = randomFromString(mix, 10);
}


function generatePhoneNumber() {
    document.getElementById("phoneNumber").innerHTML = randomPhoneNumber("905");
}

function generatePostalCode() {
    document.getElementById("postalCode").innerHTML = randomPostalCode();
}

function generateUsername() {
    let randomUN = randomFromArray(words);
    randomUN += randomFromString(numbers, 3);
    document.getElementById("username").innerHTML = randomUN;
}

function generateEmail() {
    const username = randomFromArray(words) + "." + 
        randomFromString(lowercase, 2) + randomFromString(numbers, 2);
    const email = username + "@" + randomFromArray(mailEndings);
    document.getElementById("email").innerHTML = email;
}
