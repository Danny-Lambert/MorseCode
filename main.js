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
    // const newEnglishBox = englishBox.toLowerCase();
    const wordBox  = englishBox.toLowerCase().split(""); 
    console.log(wordBox);
    const newArray = wordBox.map((letter) => {
        const morseLetter = letters[letter];
        return morseLetter;
    })          
    let outputWord = newArray.join("");
    console.log(outputWord);
    document.getElementById("morse_Box").innerHTML = outputWord;
    
}



document.getElementById("translate_Button").addEventListener("click", () => {
    englishToMorseCode()});



