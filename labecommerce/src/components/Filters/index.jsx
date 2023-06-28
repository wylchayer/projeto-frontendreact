import React from "react";
import { NavFilters, FiltersSelect, DivLabelInput } from "./style";

const Filters = (props) => {
  const {
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
    ordination,
    setOrdination,
    type,
    setType,
    handleChange,
    clearFilters,
  } = props;

  return (
    <NavFilters>
      <h2>Filtros</h2>
      <DivLabelInput>
        <label htmlFor="busca">Busca por nome:</label>
        <input
          value={searchFilter}
          placeholder="Digite o nome:"
          type="text"
          id="busca"
          onChange={(event) => handleChange(event, setSearchFilter)}
        />
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="valorMinimo">Valor mínimo:</label>
        <input
          value={minFilter}
          placeholder="Digite o valor mínimo:"
          type="number"
          min={0}
          id="valorMinimo"
          onChange={(event) => handleChange(event, setMinFilter)}
          onKeyUp={(event) => {
            return event.key === "-" ? (event.target.value = "") : null;
          }}
        />
      </DivLabelInput>
      <DivLabelInput>
        <label htmlFor="valorMaximo">Valor máximo:</label>
        <input
          value={maxFilter}
          placeholder="Digite o valor máximo:"
          type="number"
          min={0}
          id="valorMaximo"
          onChange={(event) => handleChange(event, setMaxFilter)}
          onKeyUp={(event) => {
            return event.key === "-" ? (event.target.value = "") : null;
          }}
        />
      </DivLabelInput>

      <FiltersSelect>
        <DivLabelInput>
          <p>Tipos de naves:</p>
          <select
            value={type}
            onChange={(event) => handleChange(event, setType)}
          >
            <option value="">Todas</option>
            <option value="Combate">Combate</option>
            <option value="Civil">Civil</option>
          </select>
        </DivLabelInput>
        <DivLabelInput>
          <p>Ordenação:</p>
          <select
            value={ordination}
            onChange={(event) => handleChange(event, setOrdination)}
          >
            <option value="">Sem ordenação</option>
            <option value="menoresPrecos">Menores Preços</option>
            <option value="maioresPrecos">Maiores Preços</option>
          </select>
        </DivLabelInput>
      </FiltersSelect>

      <button onClick={clearFilters}>Limpar Filtros</button>
    </NavFilters>
  );
};

export default Filters;
