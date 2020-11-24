import englishToMorseCode from "./translator.js";


// Valid Inputs
it ("Should translate a to .-", () => {
    const result = englishToMorseCode('a');
    expect (result).toBe('.-');
});
// it ("Should translate a to .- ", () => {
//     const translateToMorse = englishToMorseTranslator("a");
//     expect(translateToMorse).toBe(".- ");
// });
// Invalid Inputs



// Null/No Inputs
// it("Should return please return input valid text when input is null ")
