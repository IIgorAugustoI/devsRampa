function limparcampos(){
    document.getElementById("input-despesa").value = '';
    document.getElementById("input-receita").value = '';
    document.getElementById("input-despesa-form2").value = '';
    document.getElementById("input-receita-form2").value = '';

    document.getElementById("input-despesa").focus();
}

var botao = document.querySelector(".botao");

botao.addEventListener("click", function evento (event){
    event.preventDefault();
    limparcampos();
    console.log("Noob")
})