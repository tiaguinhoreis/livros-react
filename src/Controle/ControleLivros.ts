import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: 'Use a Cabeça: Java',
    resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado...',
    autores: ['Bert Bates', 'Kathy Sierra']
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: 'Java, como Programar',
    resumo: 'Milhões de alunos aprenderam programação com os livros Deitel...',
    autores: ['Paul Deitel', 'Harvey Deitel']
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: 'Core Java for the Impatient',
    resumo: 'Guia condensado das novas funcionalidades do Java SE 9...',
    autores: ['Cay Horstmann']
  }
];

export class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex(l => l.codigo === codigo);
    if (indice > -1) {
      livros.splice(indice, 1);
    }
  }
}
