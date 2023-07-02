import { styled } from "styled-components";

export const NavFilters = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > h2 {
    color: #6f9fc8;
  }

  > button {
    align-self: center;
  }
`;

export const DivLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    border: none;
    border-bottom: 1px solid #6f9fc8;
    padding: 3px 10px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  >select{
    border-color: #6f9fc8;
    border-radius: 5px;
    padding: 5px;
  }

  >p{
    text-align: center;
  }
`;

export const FiltersSelect = styled.div`
  display: flex;
  justify-content: space-between;
`;