import { Editora } from './Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Alta Books' },
  { codEditora: 2, nome: 'Pearson' },
  { codEditora: 3, nome: 'Addison Wesley' }
];

export class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.filter(e => e.codEditora === codEditora);
    return editora.length > 0 ? editora[0].nome : '';
  }
}
