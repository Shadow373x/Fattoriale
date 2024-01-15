function calculateFactorial() {
    var input = document.getElementById("numberInput").value;
    var resultElement = document.getElementById("result");

    // Validazione dell'input
    if (isNaN(input) || input < 0) {
        resultElement.textContent = "Inserisci un numero valido.";
        return;
    }

    // Calcolo del fattoriale
    var factorial = 1;
    for (var i = 2; i <= input; i++) {
        factorial *= i;
    }

    // Visualizzazione del risultato
    resultElement.textContent = "Il fattoriale di " + input + " è: " + factorial;
}
