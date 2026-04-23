function consultar(){

let placa = document.getElementById("placa").value.trim();
let ultimo = placa.slice(-1);
let mensaje = "";

if(ultimo == "5" || ultimo == "6"){
    mensaje = "Te corresponde verificar en Enero - Febrero";
}
else if(ultimo == "7" || ultimo == "8"){
    mensaje = "Te corresponde verificar en Febrero - Marzo";
}
else if(ultimo == "3" || ultimo == "4"){
    mensaje = "Te corresponde verificar en Marzo - Abril";
}
else if(ultimo == "1" || ultimo == "2"){
    mensaje = "Te corresponde verificar en Abril - Mayo";
}
else if(ultimo == "9" || ultimo == "0"){
    mensaje = "Te corresponde verificar en Mayo - Junio";
}
else{
    mensaje = "Placa inválida";
}

document.getElementById("resultado").innerHTML = mensaje;

}