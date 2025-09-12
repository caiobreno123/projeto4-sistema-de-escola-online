class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Getters e Setters
  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getIdade() {
    return this.idade;
  }

  setIdade(idade) {
    this.idade = idade;
  }

  // Método para acessar o painel
  acessoPainel() {
    return "Acesso ao sistema escolar";
  }
}

module.exports = Usuario;
