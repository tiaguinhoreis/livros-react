import { Editora } from "../modelo/Editora";

export class ControleEditora {
  private editoras: Editora[] = [
    new Editora(1, "Editora A"),
    new Editora(2, "Editora B"),
    new Editora(3, "Editora C"),
  ];

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codigo: number): string {
    const editora = this.editoras.find(e => e.codigo === codigo);
    return editora ? editora.nome : "Editora não encontrada";
  }
}