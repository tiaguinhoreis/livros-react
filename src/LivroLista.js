import { useEffect, useState } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluirLivro = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  const LinhaLivro = (props) => {
    const { livro } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
      <tr>
        <td>
          <button className="btn btn-danger" onClick={() => props.excluir(livro.codigo)}>
            Excluir
          </button>
        </td>
        <td>{livro.titulo}</td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
      </tr>
    );
  };

  return (
    <main className="container">
      <h1 className="my-4">Dados de Livros</h1>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
