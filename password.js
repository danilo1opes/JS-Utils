document.addEventListener("DOMContentLoaded", function() {
    const lengthInput = document.getElementById("length");
    const uppercaseInput = document.getElementById("uppercase");
    const lowercaseInput = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const generateButton = document.getElementById("generate");
    const passwordDisplay = document.getElementById("password");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "0123456789";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolsChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    function generatePassword() {
        const passwordLength = parseInt(lengthInput.value);
        let allowedChars = "";

        if (uppercaseInput.checked) {
            allowedChars += uppercaseChars;
        }
        if (lowercaseInput.checked) {
            allowedChars += lowercaseChars;
        }
        if (numbersCheckbox.checked) {
            allowedChars += numbersChars;
        }
        if (symbolsCheckbox.checked) {
            allowedChars += symbolsChars;
        }

        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars.charAt(randomIndex);
        }
        return password;
    }

    generateButton.addEventListener("click", function() {
        const password = generatePassword();
        passwordDisplay.value = password;
    });
});
