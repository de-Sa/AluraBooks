function calcularValorTotalDeLivrosDisponiveis(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco * 0.95, 0).toFixed(2);
}
