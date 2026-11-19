function enviar(){
    let statusText = document.getElementById("status");

    setTimeout(() => {
        statusText.textContent = "ENVIADO!";
    }, 3000);
}