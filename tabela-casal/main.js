function limpaCampos() {
    document.getElementById("despesa").value = '';
    document.getElementById("receita").value = '';
    document.getElementById("despesa,", "receita").focus();

}

var calc = 0;
var conjujes = [];
var receitas = [];

alert("Adicione as Informaçoes dos conjuges: ");

function adicionaPessoa(despesa, receita) {
    conjujes.push([Number(despesa)]);
    receitas.push([Number(receita)]);
    ++calc;

    if (calc > 1) {
        Calculos();
    } else {
        limpaCampos();
        //alert("Adicione as informações do conjuge 2: ");
    }

}

function Calculos() {

    // Tabela 1

    var despesaConjuje1 = conjujes[0][0];
    var despesaConjuje2 = conjujes[1][0];
    var despesaTotal = despesaConjuje1 + despesaConjuje2;

    var valorConjuge1 = (despesaTotal) / 2;
    var valorConjuge2 = (despesaTotal) / 2;


    var porcentagemConjuge1 = (despesaConjuje1 / despesaTotal) * 100;
    var porcentagemConjuge2 = (despesaConjuje2 / despesaTotal) * 100;

    var porcentagemTotal = 100;

    var valorDevidoTotal = despesaTotal;

    var saldoConjujes1 = despesaConjuje1 - valorConjuge1;
    var saldoConjujes2 = despesaConjuje2 - valorConjuge2;
    var saldoTotal = saldoConjujes1 + saldoConjujes2;


    var saldoTotal = formSaldoConjuje1 + formSaldoConjuje2;

    saldoConjujes1 = saldoConjujes1.toFixed(2);
    saldoConjujes2 = saldoConjujes2.toFixed(2);

    var status = '';
    if (saldoConjujes1 < 0) {

        status = "Conj. 1 deve R$: <br>" + saldoConjujes1 + " ao Conj. 2"
    } else if (saldoConjujes2 < 0) {

        status = "Conj. 2 deve R$:" + saldoConjujes2 + " ao Conj. 1"
    } else {
        status = "Sem saldo a pagar:"
    }

    // Tabela 2

    var formValorConjuge1 = (despesaTotal) * 0.60;
    var formValorConjuge2 = (despesaTotal) * 0.40;
    var formPorcentagemConjuje1 = (100 * formValorConjuge1) / despesaTotal;
    var formPorcentagemConjuje2 = (100 * formValorConjuge2) / despesaTotal;
    var formSaldoConjuje1 = despesaConjuje1 - formValorConjuge1;
    var formSaldoConjuje2 = despesaConjuje2 - formValorConjuge2;

    formSaldoConjuje1 = formSaldoConjuje1.toFixed(2);
    formSaldoConjuje2 = formSaldoConjuje2.toFixed(2);

    var formStatus = '';

    if (formSaldoConjuje1 < 0) {

        formStatus = "Conj. 1 deve R$: <br>" + formSaldoConjuje1 + " ao Conj. 2"
    } else if (formSaldoConjuje2 < 0) {

        formStatus = "Conj. 2 deve R$:" + formSaldoConjuje2 + " ao Conj. 1"
    } else {
        formStatus = "Sem saldo a pagar:"
    }

    // Tabela 3

    var receitaConjuje1 = receitas[0][0];
    var receitaConjuje2 = receitas[1][0];
    var totalReceita = receitaConjuje1 + receitaConjuje2;


    var form3PorcentagemConjuje1 = (receitaConjuje1 * 100) / totalReceita;
    var form3PorcentagemConjuje2 = (receitaConjuje2 * 100) / totalReceita;
    var form3PorcentagemTotal = 100;

    var valorPorpocionalConjuge1 = (form3PorcentagemConjuje1 / 100) * despesaTotal;
    var valorPorpocionalConjuge2 = (form3PorcentagemConjuje2 / 100) * despesaTotal;

    var valorPorpocionalTotal = Number(valorPorpocionalConjuge1) + Number(valorPorpocionalConjuge2);


    var form3SaldoConjuge1 = despesaConjuje1 - valorPorpocionalConjuge1;
    var form3SaldoConjuge2 = despesaConjuje2 - valorPorpocionalConjuge2;
    form3SaldoConjuge1 = form3SaldoConjuge1.toFixed(2);
    form3SaldoConjuge2 = form3SaldoConjuge2.toFixed(2);


    var formStatus3 = '';

    if (form3SaldoConjuge1 < 0) {

        formStatus3 = "Conj, 1 deve R$: <br>" + form3SaldoConjuge1 + " ao Conj. 2"
    } else if (form3SaldoConjuge2 < 0) {

        formStatus3 = "Conj. 2 deve R$:" + form3SaldoConjuge2 + " ao Conj. 1"
    } else {
        formStatus3 = "Sem saldo a pagar"
    }



    InsetTabela(despesaConjuje1, despesaConjuje2, despesaTotal, porcentagemConjuge1, porcentagemConjuge2, porcentagemTotal, valorConjuge1, valorConjuge2, valorDevidoTotal, saldoConjujes1, saldoConjujes2, saldoTotal, status);

    insertTabela2(despesaConjuje1, despesaConjuje2, despesaTotal, formPorcentagemConjuje1, formPorcentagemConjuje2, porcentagemTotal, formValorConjuge1, formValorConjuge2, valorDevidoTotal, formSaldoConjuje1, formSaldoConjuje2, saldoTotal, formStatus);

    insertTabela3(despesaConjuje1, despesaConjuje2, despesaTotal, form3PorcentagemConjuje1, form3PorcentagemConjuje2, form3PorcentagemTotal, valorPorpocionalConjuge1, valorPorpocionalConjuge2, valorPorpocionalTotal, form3SaldoConjuge1, form3SaldoConjuge2, saldoTotal, formStatus3);
}


function InsetTabela(despesaConjuje1, despesaConjuje2, despesaTotal, porcentagemConjuge1, porcentagemConjuge2, porcentagemTotal, valorConjuge1, valorConjuge2, valorDevidoTotal, saldoConjujes1, saldoConjujes2, saldoTotal, status) {
    // Conjuge 1
    document.querySelector(".despesa-conjuge1").innerHTML = conjujes[0][0].toFixed(2);
    document.querySelector(".pago-conjuge1").innerHTML = porcentagemConjuge1.toFixed(2);
    document.querySelector(".valor-conjuge1").innerHTML = valorConjuge1.toFixed(2);
    document.querySelector(".saldo-conjuge1").innerHTML = saldoConjujes1;

    //Conjuge 2

    document.querySelector(".despesa-conjuge2").innerHTML = conjujes[1][0].toFixed(2);
    document.querySelector(".pago-conjuge2").innerHTML = porcentagemConjuge2.toFixed(2);
    document.querySelector(".valor-conjuge2").innerHTML = valorConjuge2.toFixed(2);
    document.querySelector(".saldo-conjuge2").innerHTML = saldoConjujes2;

    document.querySelector(".despesa-total").innerHTML = despesaTotal.toFixed(2);
    document.querySelector(".pago-total").innerHTML = porcentagemTotal;
    document.querySelector(".valor-total").innerHTML = valorDevidoTotal.toFixed(2);
    document.querySelector(".saldo-total").innerHTML = status;
}

function insertTabela2(despesaConjuje1, despesaConjuje2, despesaTotal, formPorcentagemConjuje1, formPorcentagemConjuje2, porcentagemTotal, formValorConjuge1, formValorConjuge2, valorDevidoTotal, formSaldoConjuje1, formSaldoConjuje2, saldoTotal, formStatus) {
    // Conjuge 1
    document.querySelector(".form2-despesa-conjuge1").innerHTML = conjujes[0][0].toFixed(2);
    document.querySelector(".form2-pago-conjuge1").innerHTML = formPorcentagemConjuje1.toFixed(2);
    document.querySelector(".form2-valor-conjuge1").innerHTML = formValorConjuge1.toFixed(2);
    document.querySelector(".form2-saldo-conjuge1").innerHTML = formSaldoConjuje1;

    //Conjuge 2

    document.querySelector(".form2-despesa-conjuge2").innerHTML = conjujes[1][0].toFixed(2);
    document.querySelector(".form2-pago-conjuge2").innerHTML = formPorcentagemConjuje2.toFixed(2);
    document.querySelector(".form2-valor-conjuge2").innerHTML = formValorConjuge2.toFixed(2);
    document.querySelector(".form2-saldo-conjuge2").innerHTML = formSaldoConjuje2;

    document.querySelector(".form2-despesa-total").innerHTML = despesaTotal.toFixed(2);
    document.querySelector(".form2-pago-total").innerHTML = porcentagemTotal;
    document.querySelector(".form2-valor-total").innerHTML = valorDevidoTotal.toFixed(2);
    document.querySelector(".form2-saldo-total").innerHTML = formStatus;

}

function insertTabela3(despesaConjuje1, despesaConjuje2, despesaTotal, form3PorcentagemConjuje1, form3PorcentagemConjuje2, form3PorcentagemTotal, valorPorpocionalConjuge1, valorPorpocionalConjuge2, valorPorpocionalTotal, form3SaldoConjuge1, form3SaldoConjuge2, saldoTotal, formStatus3) {
    // Conjuge 1
    document.querySelector(".form3-despesa-conjuge1").innerHTML = conjujes[0][0].toFixed(2);
    document.querySelector(".form3-pago-conjuge1").innerHTML = form3PorcentagemConjuje1.toFixed(2);
    document.querySelector(".form3-valor-conjuge1").innerHTML = valorPorpocionalConjuge1.toFixed(2);
    document.querySelector(".form3-saldo-conjuge1").innerHTML = form3SaldoConjuge1;

    //Conjuge 2

    document.querySelector(".form3-despesa-conjuge2").innerHTML = conjujes[1][0].toFixed(2);
    document.querySelector(".form3-pago-conjuge2").innerHTML = form3PorcentagemConjuje2.toFixed(2);
    document.querySelector(".form3-valor-conjuge2").innerHTML = valorPorpocionalConjuge2.toFixed(2);
    document.querySelector(".form3-saldo-conjuge2").innerHTML = form3SaldoConjuge2;

    document.querySelector(".form3-despesa-total").innerHTML = despesaTotal.toFixed(2);
    document.querySelector(".form3-pago-total").innerHTML = form3PorcentagemTotal;
    document.querySelector(".form3-valor-total").innerHTML = valorPorpocionalTotal.toFixed(2);
    document.querySelector(".form3-saldo-total").innerHTML = formStatus3;
}