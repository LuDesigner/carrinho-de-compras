let totalGeral = 0;
limpar();

function adicionar() {
    // recuperar valores, nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;

    let quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
         return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);

    // calcular o preço, o nosso subtotal.
    let preco = parseFloat(quantidade * valorUnitario);
    let carrinho = document.getElementById('lista-produtos');

    // adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    // alerts
    // alert(`Produto selecionado ${nomeProduto}`);
    // alert(`Valor Unitário de R$ ${valorUnitario}`);
    // alert(`Ao preço total de R$ ${preco}`);
    // alert(`Quantidade inserida foi de ${quantidade} unidades do produto ${nomeProduto} ao preço de R$ ${valorUnitario}`);

    // atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0'

}
