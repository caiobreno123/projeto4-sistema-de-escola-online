const Usuario = require("./Usuario");

class Coordenador extends Usuario {
  constructor(nome, idade) {
    super(nome, idade);
  }

  // Sobrescreve o método acessoPainel
  acessoPainel() {
    return "Painel do Coordenador: administração escolar";
  }
}

module.exports = Coordenador;
