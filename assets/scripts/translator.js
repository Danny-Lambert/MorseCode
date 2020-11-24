import * as letters from "./data.js";

export const englishToMorseCode = () => {


    const englishBox = document.getElementById("input").value;
    // const newEnglishBox = englishBox.toLowerCase();
    const wordBox = englishBox.toLowerCase().split("");   
    const newArray = wordBox.map((letter) => {
        const morseLetter = letters[letter];
        return morseLetter;
    })          
    outputWord = newArray.join("");
    document.getElementById("morse_Box").innerHTML = outputWord;
}
