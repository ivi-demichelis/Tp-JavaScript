
const copyIcon = document.getElementById("copy");
const refreshIcon = document.getElementById("refresh");
const passwordPlace = document.getElementById("passwordResult");
const generateBtn = document.getElementById("button");

const includeNumbers = document.getElementById("includeNumbers");
const includeLower = document.getElementById("includeLower");
const includeUpper = document.getElementById("includeUpper");
const includeSymbols = document.getElementById("includeSymbols");

const lettersOnly = document.querySelector("#lettersOnly");
const numbersOnly = document.querySelector("#numbersOnly");
const allCharacters = document.getElementById("allCharacters");

    
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    const allowedCharacter = [lower, numbers, upper, symbols]
    

const generatePassword = (base, length) => {
    let password = [];
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * base.length);
        password.push(base.charAt(random));    
    }
    let finalPassword = password.join("")
    return finalPassword
};


const generate = () => {
    let length = parseInt(numberRange.value);

    let base = "";

    if (includeNumbers.checked) base += allowedCharacter[1];
    if (includeUpper.checked) base += allowedCharacter[2];
    if (includeLower.checked) base += allowedCharacter[0];
    if (includeSymbols.checked) base += allowedCharacter[3];

    passwordPlace.innerText = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
    button.addEventListener("click", () => {
        generate();
    });
    lettersOnly.addEventListener("click", () =>{
        includeLower.disabled = false;
        includeUpper.disabled = false;
        includeLower.checked = true;
        includeUpper.checked = true;
        includeNumbers.disabled = true;
        includeNumbers.checked = false;
        includeSymbols.disabled = true;
        includeSymbols.checked = false;      
    })
    
    numbersOnly.addEventListener("click", () =>{
        includeLower.disabled = true;
        includeLower.checked = false;
        includeUpper.disabled = true;
        includeUpper.checked = false;
        includeSymbols.disabled = true;
        includeSymbols.checked = false;
        includeNumbers.disabled = false;
        includeNumbers.checked = true;
    })

    allCharacters.addEventListener("click", () =>{
        includeLower.disabled = false;
        includeLower.checked = true;
        includeUpper.disabled = false;
        includeUpper.checked = true;
        includeSymbols.disabled = false;
        includeSymbols.checked = true;
        includeNumbers.disabled = false;
        includeNumbers.checked = true;
    })
});

window.addEventListener("load", () => {
    allCharacters.click()
}) 


refreshIcon.addEventListener("click", () => {
   passwordPlace.innerText = "";
    includeLower.checked = false;
    includeUpper.checked = false;
    includeSymbols.checked = false;
    includeNumbers.checked = false;
    lettersOnly.checked = false;
    numbersOnly.checked = false;
    allCharacters.checked = false;
    includeNumbers.disabled = false;
    includeSymbols.disabled = false;
    allCharacters.click()
 })

 copyIcon.addEventListener("click", () => {    
    if(passwordPlace.value!= null){
        navigator.clipboard.writeText(passwordPlace.value);
        alert("Copiado!")
    }else {
        alert("Debes generar una contraseña antes de intentar copiarla.");
    }
})

generateBtn.addEventListener("click", () =>{
    if(allCharacters.checked = false){
        alert("Debes elegir caracteres antes de generar una contraseña")
    }
})















