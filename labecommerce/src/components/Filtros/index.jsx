import React from "react";
import { FiltrosNav, FiltrosForm } from "./style";

const Filtros = () => {
    return (
        <FiltrosNav>
            <h2>Filtros</h2>
            <FiltrosForm>
                <div className="inputsFiltro">
                    <label id="valorMinimo">Valor mínimo:</label>
                    <input type="number" id="valorMinimo" />
                </div>
                <div className="inputsFiltro">
                    <label id="valorMaximo">Valor máximo:</label>
                    <input type="number" id="valorMaximo" />
                </div>
                <div className="inputsFiltro">
                    <label id="busca">Busca por nome:</label>
                    <input type="text" id="busca" />
                </div>
            </FiltrosForm>
        </FiltrosNav>
    )
}

export default Filtros