var calc = 0;
var conjujes = [];

alert("Adicione as informações do primeiro Cônjuge");

function adicionaPessoa(despesa, pago , valor) {
    conjujes.push([Number(despesa), Number(pago), Number(valor)]);
        ++calc;
    if (calc > 1) {
        Calculos();
    }else {
    alert("Adicione as informações do segundo Cônjuge");
    }
}

function Calculos() {
    
    var despesaTotal = Number(conjujes[0][0]) + Number(conjujes[1][0]);
    conjujes[0][1] = (Number(conjujes[0][0]) / Number(despesaTotal) * 100);
    
    conjujes[0].push = conjujes[0][0] - (despesaTotal / 2);
    
    conjujes[1][1] = (Number(conjujes[1][0]) / Number(despesaTotal) * 100);
    var porcentagemConjuge2 = conjujes[1][1];
    conjujes[1].push = conjujes[1][0] - (despesaTotal / 2);
    var porcentagemConjuge1 = conjujes[0][1];

    var saldoConjujes1 = conjujes[0][0] - (despesaTotal / 2);
    var saldoConjujes2 = conjujes[1][0] - (despesaTotal / 2);

    var saldoTotal = saldoConjujes1 + saldoConjujes2;
    var valorDevidoTotal = (Number(conjujes[0][2]) + Number(conjujes[1][2])) / 2;

    InsetTabela(conjujes, despesaTotal, porcentagemConjuge1, porcentagemConjuge2, valorDevidoTotal, saldoConjujes1, saldoConjujes2, saldoTotal);
}

function InsetTabela(conjunto,despesaTotal, porcentagemConjuge1, porcentagemConjuge2, valorDevidoTotal,saldoConjujes1, saldoConjujes2, saldoTotal) {
    // Conjuge 1
    document.querySelector("#despesa-conjuge1").innerHTML = conjunto[0][0];
    document.querySelector("#pago-conjuge1").innerHTML = conjunto[0][1];
    document.querySelector("#valor-conjuge1").innerHTML = conjunto[0][2];
    document.querySelector("#saldo-conjuge1").innerHTML = saldoConjujes1;

    //Conjuge 2

    document.querySelector("#despesa-conjuge2").innerHTML = conjunto[1][0];
    document.querySelector("#pago-conjuge2").innerHTML = conjunto[1][1];
    document.querySelector("#valor-conjuge2").innerHTML = conjunto[1][2];
    document.querySelector("#saldo-conjuge2").innerHTML = saldoConjujes2;

    document.querySelector("#despesa-total").innerHTML = despesaTotal;
    document.querySelector("#pago-total").innerHTML = "100";
    document.querySelector("#valor-total").innerHTML = valorDevidoTotal;
    document.querySelector("#saldo-total").innerHTML = saldoTotal;
}