document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const mensagem = document.getElementById("mensagem");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        mensagem.textContent = "Por favor, insira valores válidos!";
        mensagem.style.color = "red";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    mensagem.textContent = `Seu IMC é ${imc} (${classificacao})`;
    mensagem.style.color = "green";
});
