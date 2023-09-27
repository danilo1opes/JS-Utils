function reverseString(){
    const stringOrigin = document.getElementById("input").value;
    let reverseString = '';

    for(let i = stringOrigin.length - 1; i >= 0; i--){
        reverseString += stringOrigin.charAt(i);
    }

    document.getElementById("string").value = reverseString; 
}