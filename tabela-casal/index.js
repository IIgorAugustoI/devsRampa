function adicionaPessoa(nome, despesa,pago, valor, saldo) {

    var tabela = document.getElementById("tabela"); // Pegar o elemento no html pelo seu ID.
    var qtdLinha = tabela.rows.length; // Para saber a quantidade de linhas da tabela
    var linha = tabela.insertRow(qtdLinha); // Adicionar mais uma linha a tabela.

    var celulaNome = linha.insertCell(0);
    var celulaDespesa = linha.insertCell(1);
    var celulaPago = linha.insertCell(2);
    var celulaValor = linha.insertCell(3);
    var celulaSaldo = linha.insertCell(4);

    celulaNome.innerHTML = nome;
    celulaDespesa.innerHTML = despesa;
    celulaPago.innerHTML = pago;
    celulaValor.innerHTML = valor;
    celulaSaldo.innerHTML = saldo;
}