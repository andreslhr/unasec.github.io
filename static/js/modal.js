const btnAbrirModal =
document.querySelector("#validacion-btn");
const btnAbrirModal2 =
document.querySelector("#validacion-btn2");
const btnCerrarModal =
document.querySelector("#validacion-btn-xmark");
const modal = 
document.querySelector("#modal-container");

btnAbrirModal.addEventListener("click",()=>{
    modal.show();
})

btnAbrirModal2.addEventListener("click",()=>{
    modal.show();
})

btnCerrarModal.addEventListener("click",()=>
{
    modal.close();
})