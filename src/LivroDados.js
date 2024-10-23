import React from "react";
import { ControleEditora } from "./controle/ControleEditora";

const controleEditora = new ControleEditora();

function LivroDados({ livro }) {
  const nomeEditora = controleEditora.getNomeEditora(livro.editora);
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{livro.titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{nomeEditora}</h6>
        <p className="card-text">{livro.resumo}</p>
        <p className="card-text">Autores: {livro.autores.join(", ")}</p>
      </div>
    </div>
  );
}

export default LivroDados;