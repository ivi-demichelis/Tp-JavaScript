
let copyIcon = document.getElementById("copy");
let refreshIcon = document.getElementById("refresh");
let passwordPlace = document.getElementById("passwordResult");

let includeNumbers = document.getElementById("includeNumbers");
let includeLower = document.getElementById("includeLower");
let includeUpper = document.getElementById("includeUpper");
let includeSymbols = document.getElementById("includeSymbols");


const lettersOnly = document.querySelector("#lettersOnly")
const numbersOnly = document.querySelector("#numbersOnly")
const allCharacters = document.getElementById("allCharacters")


    let base = "";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";


const generatePassword = (base, length) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};


const generate = () => {
    let length = parseInt(numberRange.value);

    if (includeNumbers.checked) base += numbers;
    if (includeUpper.checked) base += upper;
    if (includeLower.checked) base += lower;
    if (includeSymbols.checked) base += symbols;

    if (lettersOnly.checked) base = lower + upper;
    if (numbersOnly.checked) base = numbers;
    if (allCharacters.checked) base = lower + numbers + upper + symbols;

    passwordPlace.innerText = generatePassword(base, length);

};

window.addEventListener("DOMContentLoaded", () => {
    boton.addEventListener("click", () => {
        generate();
    });
});

refreshIcon.addEventListener("click", () => {
   passwordPlace.textContent = generatePassword("");
 })

 copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordPlace.textContent);
    alert("Copiado!")

    if(passwordPlace.textContent!="")
    {navigator.clipboard.writeText(passwordPlace.textContent);
    }else {alert("Debes generar una contraseña antes de intentar copiarla.");
}
})

















