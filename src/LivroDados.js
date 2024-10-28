import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {ControleLivro} from './controle/ControleLivros'; // Importar controlador de livros
import {ControleEditora} from './controle/ControleEditora'; // Importar controlador de editoras

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);
  const [opcoes, setOpcoes] = useState([]);
  const navigate = useNavigate();

  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  useEffect(() => {
    const editoras = controleEditora.getEditoras();
    setOpcoes(editoras);
    setCodEditora(editoras[0].codEditora);
  }, [ControleEditora]);

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();
    const novoLivro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora
    };
    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main className="container">
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo</label>
          <textarea className="form-control" id="resumo" rows="3" value={resumo} onChange={(e) => setResumo(e.target.value)}></textarea>
        </div>
      
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">Editora</label>
          <select className="form-select" id="editora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((editora) => (
              <option key={editora.codEditora} value={editora.codEditora}>
                {editora.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">Autores (1 por linha)</label>
          <textarea className="form-control" id="autores" rows="3" value={autores} onChange={(e) => setAutores(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </main>
  );
};

export default LivroDados;
