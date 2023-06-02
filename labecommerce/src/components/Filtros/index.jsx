import React from "react";
import { FiltrosNav, FiltrosForm } from "./style";

const Filtros = (props) => {
  const {
    setMinFilter,
    setMaxFilter,
    setSearchFilter,
    handleChange
  } = props;

  return (
    <FiltrosNav>
      <h2>Filtros</h2>
      <FiltrosForm>
        <div className="inputsFiltro">
          <label id="valorMinimo">Valor mínimo:</label>
          <input type="number" min={0} id="valorMinimo" onChange={(event) => handleChange(event, setMinFilter)} onKeyUp={(event) => {return (event.key==='-' ? event.target.value='' : null)}} />
        </div>
        <div className="inputsFiltro">
          <label id="valorMaximo">Valor máximo:</label>
          <input type="number" min={0} id="valorMaximo" onChange={(event) => handleChange(event, setMaxFilter)} onKeyUp={(event) => {return (event.key==='-') ? event.target.value='' : null}} />
        </div>
        <div className="inputsFiltro">
          <label id="busca">Busca por nome:</label>
          <input type="text" id="busca" onChange={(event) => handleChange(event,setSearchFilter)} />
        </div>
      </FiltrosForm>
    </FiltrosNav>
  );
};

export default Filtros;
