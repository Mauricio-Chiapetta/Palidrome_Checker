const Checkbutton = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const checkPalindrome = () => {
    const input = userInput.value; //guardar o o que o usuário escrever no input em uma variável

    const lowerReplaced = input.toLowerCase().replace(/[^a-z0-9]/g, ""); // 1. O método replace é usado para substituir partes da string 'input'.
    // 2. A expressão regular /[^A-Za-z0-9]/g encontra todos os caracteres que não são letras ou números.
    // 3. Os caracteres encontrados são substituídos por uma string vazia, efetivamente removendo-os.

    if (userInput.value === "") {
        // se o usuário nao escrever nada no input

        alert("Please input a value");
    } else if (userInput.value.length === 1) {
        // A = is a palindrome

        resultDiv.innerText = `${input} is a palindrome`;
        userInput.value = ""; //limpar o input
    } else if (lowerReplaced === [...lowerReplaced].reverse().join("")) {
        //_eye = eye is a palindrome

        resultDiv.innerText = `${input} is a palindrome`;
        userInput.value = "";
    } else {
        // se o input não corresponder a nenhum dos if é porque não é palíndromo
        resultDiv.innerText = `${input} is not a palindrome`;
        userInput.value = "";
    }
};

const handleKeyPress = (e) => {
    // quando eu clico no 'enter' no teclado
    if (e.key === 'Enter') {
        e.preventDefault()
        checkPalindrome();

    }
};

Checkbutton.addEventListener("click", checkPalindrome);
userInput.addEventListener('keypress', handleKeyPress)







// CODIGO ANTIGO
// Checkbutton.addEventListener('click', () => {//quando o botão é clicado

//     const input = userInput.value;//guardar o o que o usuário escrever no input em uma variável

//     const lowerReplaced = input.toLowerCase().replace(/[^a-z0-9]/g,"")  // 1. O método replace é usado para substituir partes da string 'input'.
//                                                         // 2. A expressão regular /[^A-Za-z0-9]/g encontra todos os caracteres que não são letras ou números.
//                                                         // 3. Os caracteres encontrados são substituídos por uma string vazia, efetivamente removendo-os.

//     if (userInput.value === "") {// se o usuário nao escrever nada no input

//         alert("Please input a value")

//     } else if (userInput.value.length === 1) {// A = is a palindrome

//         resultDiv.innerText = `${input} is a palindrome`
//         userInput.value = ""//limpar o input

//     } else if (lowerReplaced=== [...lowerReplaced].reverse().join("")) {//_eye = eye is a palindrome

//         resultDiv.innerText = `${input} is a palindrome`
//         userInput.value = ""

//     } else {// se o input não corresponder a nenhum dos if é porque não é palíndromo
//         resultDiv.innerText = `${input} is not a palindrome`
//         userInput.value = ""
//     }
// })
