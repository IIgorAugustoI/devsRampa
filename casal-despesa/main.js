function limparCampos(){
    let inputs = document.getElementsByTagName("input");
    for(const i in inputs){
        const limpar = inputs[i];
        limpar.value = "";
    }
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
    var porcentagemPagaConjuge1 = 0;
    var porcentagemPagaConjuge2 = 0;
    var porcentagemPagaTotal = "100%";
    var valorDevidoConjuge1 = 0;
    var valorDevidoConjuge2 = 0;
    var valorDevidoTotal = 0;
    var saldoConjuge1 = 0;
    var saldoConjuge2 = 0;
    var saldoTotal = "";
    var resultadoPorcentagem = 0;

    var opcoes = document.getElementsByName("radio");
    
    if(opcoes[0].checked){
        alert("Você escolheu dividir meio a meio");
         porcentagemPagaConjuge1 = ((despesaConjuge1 / despesaTotal) * 100).toFixed(2);
         porcentagemPagaConjuge2 = ((despesaConjuge2 / despesaTotal) * 100).toFixed(2);
         valorDevidoConjuge1 = (despesaTotal / 2);
         valorDevidoConjuge2 = (despesaTotal / 2);
         valorDevidoTotal = valorDevidoConjuge1 + valorDevidoConjuge2;
         saldoConjuge1 = despesaConjuge1 - valorDevidoConjuge1;
         saldoConjuge2 = despesaConjuge2 - valorDevidoConjuge2;

    } else if (opcoes[1].checked){
        alert("Você escolheu divisão 60%");
         porcentagemPagaConjuge1 = 60;
         porcentagemPagaConjuge2 = 40;
         valorDevidoConjuge1 = despesaTotal * 0.60;
         valorDevidoConjuge2 = despesaTotal * 0.40;
         valorDevidoTotal = valorDevidoConjuge1 + valorDevidoConjuge2;
         saldoConjuge1 = despesaConjuge1 - valorDevidoConjuge1;
         saldoConjuge2 = despesaConjuge2 - valorDevidoConjuge2;

    } else if (opcoes[2].checked){
        alert("Você escolheu proporcionalmente a redenda");
        if(receitaConjuge1 > receitaConjuge2) {
            porcentagemPagaConjuge1 = ((receitaConjuge1 * 100) / despesaTotal).toFixed(2);
            resultadoPorcentagem = ((porcentagemPagaConjuge1 - 100) * (-1)).toFixed(2);
            porcentagemPagaConjuge2 = resultadoPorcentagem;

        } else if (receitaConjuge2 > receitaConjuge1){
            porcentagemPagaConjuge2 = ((receitaConjuge2 * 100) / despesaTotal).toFixed(2);
            resultadoPorcentagem = ((porcentagemPagaConjuge2 - 100) * (-1)).toFixed(2);
            porcentagemPagaConjuge1 = resultadoPorcentagem;
        }

         valorDevidoConjuge1 = (porcentagemPagaConjuge1 / 100) * despesaTotal;
         valorDevidoConjuge2 = (porcentagemPagaConjuge2 / 100) * despesaTotal;
         valorDevidoTotal = valorDevidoConjuge1 + valorDevidoConjuge2;
         saldoConjuge1 = despesaConjuge1 - valorDevidoConjuge1;
         saldoConjuge2 = despesaConjuge2 - valorDevidoConjuge2;
    } 
    
    if (saldoConjuge1 < saldoConjuge2){
        saldoConjuge2.toFixed(2);
        saldoTotal = "Cônjuge 1 deve R$ " + saldoConjuge2.toFixed(2) + " ao cônjuge 2";
    } else if (saldoConjuge1 > saldoConjuge2) {
        saldoConjuge1.toFixed(2);
        saldoTotal = "Cônjuge 2 deve R$ " + saldoConjuge1.toFixed(2) + " ao cônjuge 1";
    } else {
        saldoTotal = "Sem valor a pagar";
    }

    limparCampos();
    escreverTabela(despesaConjuge1, despesaConjuge2, despesaTotal, porcentagemPagaConjuge1, porcentagemPagaConjuge2, porcentagemPagaTotal,valorDevidoConjuge1, valorDevidoConjuge2, valorDevidoTotal ,saldoConjuge1, saldoConjuge2, saldoTotal);
})

function escreverTabela(despesaConjuge1, despesaConjuge2, despesaTotal, porcentagemPagaConjuge1, porcentagemPagaConjuge2, porcentagemPagaTotal,valorDevidoConjuge1, valorDevidoConjuge2, valorDevidoTotal ,saldoConjuge1, saldoConjuge2, saldoTotal){
    
    document.querySelector("#celula-despesa1").textContent = despesaConjuge1.toFixed(2);
    document.querySelector("#celula-despesa2").textContent = despesaConjuge2.toFixed(2);
    document.querySelector("#despesa-total").textContent = despesaTotal.toFixed(2);

    document.querySelector("#porcentagem1").textContent = porcentagemPagaConjuge1;
    document.querySelector("#porcentagem2").textContent = porcentagemPagaConjuge2;
    document.querySelector("#porcentagem-total").textContent = porcentagemPagaTotal;

    document.querySelector("#valor1").textContent = valorDevidoConjuge1.toFixed(2);
    document.querySelector("#valor2").textContent = valorDevidoConjuge2.toFixed(2);
    document.querySelector("#valor-total").textContent = valorDevidoTotal.toFixed(2);

    document.querySelector("#saldo1").textContent = saldoConjuge1.toFixed(2);
    document.querySelector("#saldo2").textContent = saldoConjuge2.toFixed(2);
    document.querySelector("#saldo-total").textContent = saldoTotal;
}