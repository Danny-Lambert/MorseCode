const letters = { 
    a: ".- ",
    b: "-... ",
    c: "-.-. ",
    d: "-.. ",
    e: ". ",
    f: "..-. ",
    g: "--. ",
    h: ".... ",
    i: ".. ",
    j: ".--- ",
    k: "-.- ",
    l: ".-.. ",
    m: "-- ",
    n: "-. ",
    o: "--- ",
    p: ".--. ",
    q: "--.- ",
    r: ".-. ",
    s: "... ",
    t: "- ",
    u: "..- ",
    v: "...- ",
    w: ".-- ",
    x: "-..- ",
    y: "-.-- ",
    z: "--.. ",
    ' ' : "/",
    one: ".---- ",
    two: "..--- ",
    three: "...-- ",
    four: "....- ",
    five: "..... ",
    six: "-.... ",
    seven: "--... ",
    eight: "---..",
}


const englishToMorseCode = () => {
   
    const englishBox = document.getElementById("input").value;
    const newEnglishBox = englishBox.toLowerCase();
    const wordBox = newEnglishBox.split("");   
    const newArray = wordBox.map((letter) => {
        const morseLetter = letters[letter];
        return morseLetter;
    })          
    outputWord = newArray.join("");
    document.getElementById("morse_Box").innerHTML = outputWord;

}



document.getElementById("translate_Button").addEventListener("click", () => {
    englishToMorseCode()});



