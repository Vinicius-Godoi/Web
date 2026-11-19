function iniciar()
{
    document.getElementById("b1").style = "display:none;";
    let cont = 1;

    let ind = setInterval(()=>{

        document.getElementById("i1").src = "img/" + cont + ".png";
        cont++;
        if(cont == 8)
        {
            clearInterval(ind);
            document.getElementById("i1").src = "img/default.png";
            document.getElementById("d1").style = "display:inline-block";
        }
    },1000);
}
function verificar()
{
    document.getElementById("b2").style = "display:none";
    let acertos = 0;
    let radioSelecionadoI1 = document.querySelector('input[name="f1"]:checked');
        
    if(radioSelecionadoI1 && 
        radioSelecionadoI1.id == "f1")
    {
        acertos++;
    }
    let radioSelecionadoI2 = document.querySelector('input[name="f2"]:checked');
        
    if(radioSelecionadoI2 && 
        radioSelecionadoI2.id == "f4")
    {
        acertos++;
    }
    let radioSelecionadoI3 = document.querySelector('input[name="f3"]:checked');
        
    if(radioSelecionadoI3 && 
        radioSelecionadoI3.id == "f8")
    {
        acertos++;
    }
    let radioSelecionadoI4 = document.querySelector('input[name="f4"]:checked');
        
    if(radioSelecionadoI4 && 
        radioSelecionadoI4.id == "f11")
    {
        acertos++;
    }
    let radioSelecionadoI5 = document.querySelector('input[name="f5"]:checked');
        
    if(radioSelecionadoI5 && 
        radioSelecionadoI5.id == "f14")
    {
        acertos++;
    }
    let radioSelecionadoI6 = document.querySelector('input[name="f6"]:checked');
        
    if(radioSelecionadoI6 && 
        radioSelecionadoI6.id == "f18")
    {
        acertos++;
    }
    let radioSelecionadoI7 = document.querySelector('input[name="f7"]:checked');
        
    if(radioSelecionadoI7 && 
        radioSelecionadoI7.id == "f19")
    {
        acertos++;
    }
    if(acertos > 1)
    {
        document.getElementById("acertos").innerHTML = `Você acertou ${acertos} imagens`;
    }
    else
    {
        document.getElementById("acertos").innerHTML = `Você acertou ${acertos} imagem`;
    }
}