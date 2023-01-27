import { ITransactionContext, ITransactionContextProps } from "./interfaces";
import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext
);

const TransactionProvider = ({ children }: ITransactionContextProps) => {
  const [transactions, setTransactions] = useState<string[]>([] as string[]);

  useEffect(() => {
    transactions?.length > 0 &&
      transactions.forEach((tran) => handleTransaction(tran));
  }, [transactions]);

  const handleTransaction = (transaction: string) => {
    let type = transaction.slice(0, 1);
    let date = transaction.slice(1, 9);
    let value = parseInt(transaction.slice(9, 19)) / 100;
    let cpf = transaction.slice(19, 30);
    let card = transaction.slice(30, 42);
    let hour = transaction.slice(42, 48);
    let store_owner = transaction.slice(48, 62);
    let store_name = transaction.slice(62, 80);

    console.log({
      type,
      date,
      value,
      cpf,
      card,
      hour,
      store_owner,
      store_name,
    });
  };

  return (
    <TransactionContext.Provider value={{ setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
