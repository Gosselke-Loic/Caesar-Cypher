/**
 * Take value from html when the user submit values and pass values to check for only letters strings
 */
document.getElementById("buttonThis").addEventListener("click", () => {
    let str = document.getElementById("cryptoThis").value;
    let shift = document.getElementById("shiftThis").value;

    SoloLetter(str, shift);
})

/**
 * Check if the string have only letters
 * @param {string} str value submitted from the user
 * @param {number} shift letter shift to apply caesar-cypher
 */
function SoloLetter(str, shift) {

    if(/^[a-zA-Z]+$/.test(str) === true) {
        LowerCase(str, shift);
    } else {
        console.log("Solo letters in the string");
    }
}

/**
 * Transform the string to lowercase
 * @param {string} str value submitted from the user
 * @param {number} shift letter shift to apply caesar-cypher
 */
function LowerCase (str ,shift) {
    let LowerCase = "";

    LowerCase = str.toLowerCase();
    CaesarCypher(LowerCase, shift);
}

//call the input to show the result crypted
let resultat = document.getElementById("resultat");

/**
 * apply the shift to the string recieved from the user and store the new value in localstorage
 * @param {*} str value submitted from the user
 * @param {*} shift letter shift to apply caesar-cypher
 */
function CaesarCypher(str, shift) {
    let strCode = "";

    const shift2 = 26 + (shift % 26);

    localStorage.setItem("shiftNum", shift2);

    for (let i = 0; i <= str.length-1; i++) {
        let letter = str.charCodeAt(i);

        let c = String.fromCharCode(((letter - 97 + shift2) % 26) + 97);
        
        strCode += c;
    } 
    resultat.innerHTML = strCode;
    localStorage.setItem("stringCoded", strCode);
}

//call input to show the result decrypted
let resultatDe = document.getElementById("resultatDe");

/**
 * take values from localstorage to decrypte the string
 */
document.getElementById("buttonThis2").addEventListener("click", () => {
    let shiftDecode = localStorage.getItem("shiftNum");
    let strDecode = localStorage.getItem("stringCoded");

    DecodeCaesar (strDecode, shiftDecode);
})

/**
 * decrypte the previous string crypted to show the real message
 * @param {string} str value submitted from the user
 * @param {number} shift letter shift to apply caesar-cypher
 */
function DecodeCaesar(str, shift) {
    let decodedStr = "";
    
    const shift2 = 26 + (shift * 26) - shift;

    for(let i = 0; i <= str.length-1; i++) {
        let letter = str.charCodeAt(i);
        
        let c = String.fromCharCode(((letter - 97 + shift2) % 26) + 97)
        decodedStr += c;
    }
    resultatDe.innerHTML = decodedStr;
}