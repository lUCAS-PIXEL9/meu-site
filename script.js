// Função que altera o conteúdo da caixa "Não" para "Sim" quando o mouse passar
document.getElementById('nao').addEventListener('mouseover', function() {
    this.textContent = 'Sim';
});

// Função que retorna o conteúdo da caixa "Sim" ao voltar o mouse para fora
document.getElementById('nao').addEventListener('mouseout', function() {
    this.textContent = 'Não';
});
