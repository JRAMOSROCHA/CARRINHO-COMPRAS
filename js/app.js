let totalGeral = 0; 
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario =  produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value;
    quantidade = quantidade.trim(); // Remove espaços em branco
    quantidade = parseFloat(quantidade); // Converte para número

    if(valorUnitario == 0) {
        alert(`O preço unitário do produto selecionado está incorreta. O valor digitado foi ${valorUnitario}!`);
        document.getElementById('quantidade').value = '';
    }
    else if(isNaN(quantidade)){
        alert(`A quantidade do produto selecionado está incorreta. O valor digitado foi nulo ou vazio!`);
        document.getElementById('quantidade').value = '';
    }
    else if(quantidade <= 0.00){
        alert(`A quantidade do produto selecionado está incorreta. O valor digitado foi ${quantidade}!`);
        document.getElementById('quantidade').value = '';
    }
    else if((valorUnitario >= 0.01) && (quantidade >= 0.01)){
        //calcular o preço, o nosso subtotal
        let preco = quantidade * valorUnitario;
        let carrinho = document.getElementById('lista-produtos');

        //adicionar no carrinho
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
        </section>`;  
        
        //atualizar o valor total
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total'); 
        campoTotal.textContent = `R$ ${totalGeral.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
        document.getElementById('quantidade').value = '';
    }
    else{
        alert("Ocorreu um erro interno!");
    }
}
    
    function limpar() {
        document.getElementById('lista-produtos').innerHTML = '';
        document.getElementById('valor-total').textContent = 'R$ 0,00';
    }