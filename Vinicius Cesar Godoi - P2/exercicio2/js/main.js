function processar(){
    document.getElementById("nome-erro").style = "display:none;";
    document.getElementById("peso-erro").style = "display:none;";
    document.getElementById("altura-erro").style = "display:none;";


    let nome = document.getElementById("nome").value;

    let pesoIn = document.getElementById("peso");
    let peso = parseFloat(pesoIn.value.replace(",", "."));

    let alturaIn = document.getElementById("altura");
    let altura = parseFloat(alturaIn.value.replace(",", "."));


    // Validação 
    if(nome == ""){
    document.getElementById("nome-erro").style = "display:true;";

        document.getElementById("nome-erro").textContent = "Por favor, digite seu nome."
        return;
    }

    if(isNaN(peso) || peso <= 0){
        document.getElementById("peso-erro").style = "display:true;";
        document.getElementById("peso-erro").textContent = "Por favor, informe um peso válido."
        return;
    }

    if(isNaN(altura) || altura <= 0){
        document.getElementById("altura-erro").style = "display:true;";
        document.getElementById("altura-erro").textContent = "Por favor, informe uma altura válida."
        return;
    }


    // Processamento
    let imc = peso / (altura*altura);

    let situacao = "";

    if(imc <= 18.5){
        situacao = "Abaixo do peso";
    }
    else if(imc >= 18.5 && imc <= 24.9){
        situacao = "Peso normal (Peso ideal)";
    }
    else if(imc >= 25.0 && imc <= 29.9){
        situacao = "Sobrepeso";
    }
    else if(imc >= 30.0 && imc <= 34.9){
        situacao = "Obesidade grau I";
    }
    else if(imc >= 35.0 && imc <= 39.9){
        situacao = "Obesidade grau II";
    }
    else if(imc >= 40.0){
        situacao = "Obesidade grau III (Mórbida)";
    }


    // Retorno
    
    document.getElementById("resultado").textContent = `${nome}, seu IMC é ${imc.toFixed(2)} - ${situacao}`;
}