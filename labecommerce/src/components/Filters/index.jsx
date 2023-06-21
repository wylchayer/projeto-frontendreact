import React from "react";
import { NavFilters, FormFilters } from "./style";

const Filters = (props) => {
  const {
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
    handleChange,
  } = props;

  return (
    <NavFilters>
      <h2>Filtros</h2>
      <FormFilters>
        <div className="inputsFiltro">
          <label id="valorMinimo">Valor mínimo:</label>
          <input
            value={minFilter}
            placeholder="Digite o valor:"
            type="number"
            min={0}
            id="valorMinimo"
            onChange={(event) => handleChange(event, setMinFilter)}
            onKeyUp={(event) => {
              return event.key === "-" ? (event.target.value = "") : null;
            }}
          />
        </div>
        <div className="inputsFiltro">
          <label id="valorMaximo">Valor máximo:</label>
          <input
            value={maxFilter}
            placeholder="Digite o valor:"
            type="number"
            min={0}
            id="valorMaximo"
            onChange={(event) => handleChange(event, setMaxFilter)}
            onKeyUp={(event) => {
              return event.key === "-" ? (event.target.value = "") : null;
            }}
          />
        </div>
        <div className="inputsFiltro">
          <label id="busca">Busca por nome:</label>
          <input
            value={searchFilter}
            placeholder="Digite o nome:"
            type="text"
            id="busca"
            onChange={(event) => handleChange(event, setSearchFilter)}
          />
        </div>
      </FormFilters>
    </NavFilters>
  );
};

export default Filters;
