import { Livro } from "../modelo/Livro";

export class ControleLivros {
  private livros: Livro[] = [
    new Livro(1, "Livro 1", "Resumo do Livro 1", ["Autor A"], 1),
    new Livro(2, "Livro 2", "Resumo do Livro 2", ["Autor B"], 2),
    new Livro(3, "Livro 3", "Resumo do Livro 3", ["Autor C"], 3),
  ];

  getLivros(): Livro[] {
    return this.livros;
  }

  excluir(codigo: number): void {
    this.livros = this.livros.filter(livro => livro.codigo !== codigo);
  }
}