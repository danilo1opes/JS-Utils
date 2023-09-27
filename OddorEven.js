function checkEvenOrOdd() {
    const numeroInput = document.getElementById("numeroInput").value;
    const numeroWhole = parseInt(numeroInput);

    if(!isNaN(numeroWhole)) {
        if (numeroWhole % 2 === 0){
            document.getElementById('result').value = numeroWhole + " and an even number"
        } else{
            document.getElementById('result').value = numeroWhole + " and an odd number"
        }
    } else{
        document.getElementById('result').value = "please type a number"
    }
}