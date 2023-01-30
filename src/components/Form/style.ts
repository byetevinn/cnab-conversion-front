import styled from "styled-components";

const Container = styled.main`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    button {
      width: 50%;

      font-weight: bolder;

      border: none;
      border-radius: 8px;
    }

    button:hover {
      background-color: var(--Color-fifth);

      cursor: pointer;
    }
  }
`;

export default Container;
