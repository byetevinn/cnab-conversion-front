import { useContext, useState } from "react";

import { TransactionContext } from "../../contexts/TransactionsContext";
const Form = () => {
  const [fileText, setFileText] = useState<string | ArrayBuffer | null>("");

  const { handleTransaction } = useContext(TransactionContext);

  const onFiles = (event: any) => {
    console.log(event.target);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileText(e.target!.result);
    };

    reader.readAsText(file);
  };

  const onTransactions = async (event: any) => {
    event.preventDefault();

    const textString = fileText as string;

    const transactionsObj = textString.match(/.{1,81}/g);

    let transactions: string[] = [];

    if (transactionsObj) {
      transactions = transactionsObj;

      transactions.length > 0 &&
        transactions.forEach((tran) => handleTransaction(tran));

      event.target[0].value = "";
    }
  };

  return (
    <div>
      <form onSubmit={onTransactions}>
        <input type="file" accept=".txt" onChange={onFiles} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
