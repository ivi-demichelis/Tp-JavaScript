
const copyIcon = document.getElementById("copy");
const refreshIcon = document.getElementById("refresh");
const passwordPlace = document.getElementById("passwordResult");

const includeNumbers = document.getElementById("includeNumbers");
const includeLower = document.getElementById("includeLower");
const includeUpper = document.getElementById("includeUpper");
const includeSymbols = document.getElementById("includeSymbols");



const lettersOnly = document.querySelector("#lettersOnly");
const numbersOnly = document.querySelector("#numbersOnly");
const allCharacters = document.getElementById("allCharacters");


    let base = "";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";
    
    const allowedCharacter = [lower, numbers, upper, symbols]

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

    if (includeNumbers.checked) base += allowedCharacter[1];
    if (includeUpper.checked) base += allowedCharacter[2];
    if (includeLower.checked) base += allowedCharacter[0];
    if (includeSymbols.checked) base += allowedCharacter[3];

    if (lettersOnly.checked) base = allowedCharacter[0] + allowedCharacter[2];
    if (numbersOnly.checked) base = allowedCharacter[1];
    if (allowedCharacter.checked) {
       for (let index = 0; index < allowedCharacter.length; index++) {
        base += allowedCharacter[index];
        
       }
    }
    passwordPlace.innerText = generatePassword(base, length);

};

window.addEventListener("DOMContentLoaded", () => {
    boton.addEventListener("click", () => {
        generate();
    });
    lettersOnly.addEventListener("input", () =>{
        includeLower.disabled = false;
        includeUpper.disabled = false;
        includeNumbers.disabled = true;
        includeNumbers.checked = false;
        includeSymbols.disabled = true;
        includeSymbols.checked = false;   
   
    })
    
    numbersOnly.addEventListener("input", () =>{})
    allCharacters.addEventListener("input", () =>{})
});

refreshIcon.addEventListener("click", () => {
   passwordPlace.value = generatePassword("");
 })

 copyIcon.addEventListener("click", () => {    
    if(passwordPlace.value!= null){
        navigator.clipboard.writeText(passwordPlace.value);
        alert("Copiado!")
    }else {
        alert("Debes generar una contraseña antes de intentar copiarla.");
    }
})

















