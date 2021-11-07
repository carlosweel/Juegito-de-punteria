document.getElementById('player').addEventListener("click", sumarPuntos)
puntos = 0;
tiempo = 60;
necesarios = 100;
function sumarPuntos(){
puntos++;
document.getElementById("puntos").innerHTML = "puntos: <b>" + puntos + "/" + necesarios + "  </b>" ;
randNum = Math.round(Math.random()*500);
randNum2 = Math.round(Math.random()*500);
document.getElementById("player").style.marginTop =randNum + "px";
document.getElementById("player").style.marginLeft =randNum2 + "px";
if (puntos == 100){
    alert("ganaste");
}
}

function restarTiempo() {
tiempo--;
document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;tiempo: "+tiempo;
if (tiempo == 0){
    alert("perdiste botin");
    tiempo = 0;
    puntos = 0;
}

}

setInterval(restarTiempo,1000)
