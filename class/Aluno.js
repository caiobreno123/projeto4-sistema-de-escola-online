const Usuario = require("./Usuario");

class Aluno extends Usuario {
  constructor(nome, idade) {
    super(nome, idade);
  }

  acessoPainel() {
    return "Painel do Aluno: consultar notas e disciplinas";
  }

  adicionarNota(nota) {
    if (!this.notas) {
      this.notas = [];
    }
    this.notas.push(nota);
  }
}

module.exports = Aluno;

