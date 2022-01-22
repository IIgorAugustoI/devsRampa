function limparCampos(){
    document.getElementById("despesa").value = '';
    document.getElementById("receita").value = '';
    document.getElementById("despesa2").value = '';
    document.getElementById("receita2").value = '';

    document.getElementById("despesa").focus();
}

var botaoAdicionar = document.getElementById("adicionar-pessoa");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector(".formulario-conjuge");

    var despesaConjuge1 = Number(form.despesa.value);
    var receitaConjuge1 = Number(form.receita.value);
    var despesaConjuge2 = Number(form.despesa2.value);
    var receitaConjuge2 = Number(form.receita2.value);

    var despesaTotal = despesaConjuge1 + despesaConjuge2;

    var porcentagemPagaConjuge1 = ((despesaConjuge1 / despesaTotal) * 100).toFixed(2);
    var porcentagemPagaConjuge2 = ((despesaConjuge2 / despesaTotal) * 100).toFixed(2);
    var porcentagemPagaTotal = 100;

    var valorDevidoConjuge1 = (despesaTotal / 2).toFixed(2);
    var valorDevidoConjuge2 = (despesaTotal / 2).toFixed(2);
    var valorDevidoTotal = valorDevidoConjuge1 + valorDevidoConjuge2;

    var saldoConjuge1 = despesaConjuge1 - valorDevidoConjuge1;
    var saldoConjuge2 = despesaConjuge2 - valorDevidoConjuge2;


    limparCampos();
    escreverTabela(despesaConjuge1, despesaConjuge2, despesaTotal, porcentagemPagaConjuge1, porcentagemPagaConjuge2, porcentagemPagaTotal,valorDevidoConjuge1, valorDevidoConjuge2, valorDevidoTotal ,saldoConjuge1, saldoConjuge2);
});



function escreverTabela(despesaConjuge1, despesaConjuge2, despesaTotal, porcentagemPagaConjuge1, porcentagemPagaConjuge2, porcentagemPagaTotal,valorDevidoConjuge1, valorDevidoConjuge2, valorDevidoTotal ,saldoConjuge1, saldoConjuge2){
    
    document.querySelector("#celula-despesa1").textContent = despesaConjuge1.toFixed(2);
    document.querySelector("#celula-despesa2").textContent = despesaConjuge2.toFixed(2);
    document.querySelector("#despesa-total").textContent = despesaTotal.toFixed(2);

    document.querySelector("#porcentagem1").textContent = porcentagemPagaConjuge1;
    document.querySelector("#porcentagem2").textContent = porcentagemPagaConjuge2;
    document.querySelector("#porcentagem-total").textContent = porcentagemPagaTotal;

    document.querySelector("#valor1").textContent = valorDevidoConjuge1;
    document.querySelector("#valor2").textContent = valorDevidoConjuge2;
    document.querySelector("#valor-total").textContent = valorDevidoTotal;

    document.querySelector("#saldo1").textContent = saldoConjuge1.toFixed(2);
    document.querySelector("#saldo2").textContent = saldoConjuge2.toFixed(2);
    document.querySelector("#saldo-total").textContent = "saldo";
}
