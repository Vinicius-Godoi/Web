function playButton(){
    let count = 1;
    let index = setInterval(()=>{
        document.getElementById("img-00").src = "img/" + count + ".png";
        count++;
        
        if(count == 8){
            clearInterval(index);
            document.getElementById("img-00").src = "img/default.png" ;
        }
    }, 1000);
}

function verify(){
    let verifyButton = getElementById("b2");
}