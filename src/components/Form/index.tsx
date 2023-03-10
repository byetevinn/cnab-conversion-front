import { BaseSyntheticEvent, useContext, useState } from "react";

import { TransactionContext } from "../../contexts/TransactionsContext";
import Container from "./style";
const Form = () => {
  const [fileText, setFileText] = useState<string | ArrayBuffer | null>("");

  const { handleTransaction, getTransactions } = useContext(TransactionContext);

  const onFiles = (event: BaseSyntheticEvent) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileText(e.target!.result);
    };

    reader.readAsText(file);
  };

  const onTransactions = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const textString = fileText as string;

    const transactionsObj = textString.match(/.{1,81}/g);

    let transactions: string[] = [];

    if (transactionsObj) {
      transactions = transactionsObj;

      transactions.length > 0 &&
        transactions.forEach((tran) => handleTransaction(tran));

      event.target[0].value = "";

      getTransactions();
    }
  };

  return (
    <Container>
      <form onSubmit={onTransactions}>
        <input type="file" accept=".txt" onChange={onFiles} />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default Form;
