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

    var despesaConjuge1 = form.despesa.value;
    var receitaConjuge1 = form.receita.value;
    var despesaConjuge2 = form.despesa2.value;
    var receitaConjuge2 = form.receita2.value;

    console.log(despesaConjuge1);
    console.log(receitaConjuge1);
    console.log(despesaConjuge2);
    console.log(receitaConjuge2);


    limparCampos();
    escreverTabela();

});


function escreverTabela(tabelaDespesaConjuge1, tabelaDespesaConjuge2,tabelaDespesaTotal, tabelaPagaConjuge1,tabelaPagaConjuge2, tabelaPagaTotal,tabelaValorConjuge1,tabelaValorConjuge2, tabelaValorTotal, tabelaSaldoConjuge1, tabelaSaldoConjuge2, tabelaSaldoTotal){
    var tabelaDespesaConjuge1 = document.querySelector("#despesa1");
    var tabelaDespesaConjuge2 = document.querySelector("#despesa2");
    var tabelaDespesaTotal = document.querySelector("#despesa-total");

    var tabelaPagaConjuge1 = document.querySelector("#porcentagem1");
    var tabelaPagaConjuge2 = document.querySelector("#porcentagem2");
    var tabelaPagaTotal = document.querySelector("#porcentagem-total");

    var tabelaValorConjuge1 = document.querySelector("#valor1");
    var tabelaValorConjuge2 = document.querySelector("#valor2");
    var tabelaValorTotal = document.querySelector("#valor-total");

    var tabelaSaldoConjuge1 = document.querySelector("#saldo1");
    var tabelaSaldoConjuge2 = document.querySelector("#saldo2");
    var tabelaSaldoTotal = document.querySelector("#saldo-total");
}
