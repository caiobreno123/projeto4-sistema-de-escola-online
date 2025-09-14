class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

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

  acessoPainel() {
    return "Acesso ao sistema escolar";
  }
}

module.exports = Usuario;

