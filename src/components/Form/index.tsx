import { FormEvent, useContext, useState } from "react";

import { TransactionContext } from "../../contexts/TransactionsContext";
const Form = () => {
  const [fileText, setFileText] = useState<string | ArrayBuffer | null>("");

  const { setTransactions } = useContext(TransactionContext);

  const onFiles = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      e.target?.result !== undefined && setFileText(e.target.result);
    };

    reader.readAsText(file);
  };

  const onTransactions = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const textString = fileText as string;

    const transactions = textString.match(/.{1,81}/g);

    setTransactions(transactions!);
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
