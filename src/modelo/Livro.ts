export class Livro {
    codigo: number;
    titulo: string;
    resumo: string;
    autores: string[];
    editora: number;
  
    constructor(codigo: number, titulo: string, resumo: string, autores: string[], editora: number) {
      this.codigo = codigo;
      this.titulo = titulo;
      this.resumo = resumo;
      this.autores = autores;
      this.editora = editora;
    }
  }