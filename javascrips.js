let btnacc=document.querySelectorAll(".ACC");
let btncancel=document.querySelectorAll(".CANCEL");
cont_co=500;
cont_s=2;
btnacc.forEach(function(node){
    node.addEventListener("click",function(){
        cont_co++;
        document.getElementById("cont").innerHTML= "Tus conexiones("+ cont_co+"+)";
        node.parentElement.parentElement.remove();
    });
    node.addEventListener("click",function(){
    cont_s--;
    document.getElementById("conts").innerHTML= "Solicitudes de conexión ("+ cont_s+")";    
    });
});

btncancel.forEach(function(node){
    node.addEventListener("click",function(){
        cont_s--;
        document.getElementById("conts").innerHTML= "Solicitudes de conexión ("+ cont_s+")";
        node.parentElement.parentElement.remove();
    });
});

let btnp=document.querySelectorAll(".btnp");
btnp.forEach(function(node){
    node.addEventListener("click", function(){
        document.getElementById("namep").innerHTML="BASTARDOELMONO";
    })
});
