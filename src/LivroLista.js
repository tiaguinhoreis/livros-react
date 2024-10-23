import React, { useState, useEffect } from "react";
import LivroDados from "./LivroDados";
import { ControleLivros } from "./controle/ControleLivros";

const controleLivros = new ControleLivros();

function LivroLista() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    setLivros(controleLivros.getLivros());
  }, []);

  return (
    <div className="container">
      <h1>Lista de Livros</h1>
      <div className="row">
        {livros.map(livro => (
          <div className="col-md-4" key={livro.codigo}>
            <LivroDados livro={livro} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LivroLista;