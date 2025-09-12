class Turma {
  constructor(nome) {
    this.nome = nome;
    this.alunos = [];
    this.disciplinas = [];
  }

  // Método para adicionar alunos à turma
  adicionarAluno(aluno) {
    this.alunos.push(aluno);
  }

  // Método para adicionar disciplinas à turma
  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina);
  }
}

module.exports = Turma;
