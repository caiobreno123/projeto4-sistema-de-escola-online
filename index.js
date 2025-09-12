const Aluno = require("./class/Aluno");
const Professor = require("./class/Professor");
const Coordenador = require("./class/Coordenador");
const Disciplina = require("./class/Disciplina");
const Turma = require("./class/Turma");
const Nota = require("./class/Nota");

// Criando usuários
const aluno = new Aluno("Maria", 16);
const professor = new Professor("João", 35);
const coordenador = new Coordenador("Ana", 40);

// Testando acesso ao painel
console.log(aluno.acessoPainel()); // "Painel do Aluno: consultar notas e disciplinas"
console.log(professor.acessoPainel()); // "Painel do Professor: gerenciar notas e turmas"
console.log(coordenador.acessoPainel()); // "Painel do Coordenador: administração escolar"

// Criando disciplinas e turma
const matematica = new Disciplina("Matemática", 80);
const turmaA = new Turma("1ºA");

// Adicionando alunos e disciplinas à turma
turmaA.adicionarDisciplina(matematica);
turmaA.adicionarAluno(aluno);

// Verificando as disciplinas e alunos da turma
console.log(turmaA.disciplinas); // [ Disciplina { nome: 'Matemática', cargaHoraria: 80 } ]
console.log(turmaA.alunos); // [ Aluno { nome: 'Maria', idade: 16 } ]

// Criando e atribuindo uma nota ao aluno
const nota1 = new Nota(8.5, matematica);
aluno.adicionarNota(nota1);

console.log(aluno.notas); // [ Nota { valor: 8.5, disciplina: Disciplina { nome: 'Matemática', cargaHoraria: 80 } } ]
