class Aluno {
    constructor(nome, notas) {
      this.nome = nome;
      this.notas = notas; // Array com 2 notas
    }
  
    calcularMedia() {
      const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
      const media = soma / this.notas.length;
      if (media > 10.0) throw new Error('Média acima da máxima permitida!');
      return media;
    }
  
    obterMencao() {
      const media = this.calcularMedia();
      if (media >= 9) return 'SS';
      if (media >= 7) return 'MS';
      if (media >= 5) return 'MM';
      return 'MI';
    }
  
    statusAprovacao() {
      const mencao = this.obterMencao();
  
      if (mencao !== 'MI' && mencao !== 'II') return 'aprovad@';
      return 'reprovad@';
    }
  }
  
  module.exports = Aluno;
  
