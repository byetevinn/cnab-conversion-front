import styled from "styled-components";

const DivHeader = styled.header`
  display: flex;
  justify-content: center;

  padding: 15px 0px;

  box-shadow: 0px 2px 10px 2px rgba(241, 192, 123, 0.8);

  .div_title {
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2rem;
      font-style: italic;
      font-family: "Secular One", sans-serif;

      color: var(--Color-first);
    }
  }

  .div_buttons {
    display: flex;
    flex-direction: column;

    gap: 8px;

    button {
      border: none;
      border-radius: 8px;
    }

    button:hover {
      background-color: var(--Color-fifth);

      cursor: pointer;
    }
  }
`;

export default DivHeader;
