function runTime(){
    let now = new Date();

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById("text").textContent = `${hour}h:${minutes}m:${seconds}s`;
}