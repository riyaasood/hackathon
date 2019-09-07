function generateEmail() {
    document.getElementById("email").innerHTML = "test@gmail.com";
}

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "1234567890";
const symbols = "!@#$%^&*";
const mix = lowercase + uppercase + numbers + symbols;

const postalCodes = {
    Toronto: "M2H 2E5",
    Montreal: "IDK",
};

function randomPostalCode() {
    const keys = Object.keys(postalCodes);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    const randCode = postalCodes[randKey];
    const fullCode = "(" + randKey + ")   " + randCode;
    return fullCode;
}

function randomLetters(string, long) {
    let randStr = "";
    const strLength = string.length;
    for (let i = 0; i < long; i++) {
        randStr += string[Math.floor(Math.random() * strLength)];
    }
    return randStr;
}

function randomPhoneNumber(areaCode) {
    const num = areaCode + randomLetters(numbers, 7);
    return num;
}

function generatePassword() {
    document.getElementById("password").innerHTML = randomLetters(mix, 10);
}


function generatePhoneNumber() {
    document.getElementById("phoneNumber").innerHTML = randomPhoneNumber("905");
}

function generatePostalCode() {
    document.getElementById("postalCode").innerHTML = randomPostalCode();
}

