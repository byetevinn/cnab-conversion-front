import { ITransactionContext, ITransactionContextProps } from "./interfaces";
import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext
);

const TransactionProvider = ({ children }: ITransactionContextProps) => {
  const [transactions, setTransactions] = useState<string[]>([]);

  useEffect(() => {
    transactions?.length > 0 &&
      transactions.forEach((tran) => handleTransaction(tran));
  }, [transactions]);

  const handleTransaction = (transaction: string) => {
    const type = transaction.slice(0, 1);
    const date = transaction.slice(1, 9);
    const value = parseInt(transaction.slice(9, 19)) / 100;
    const cpf = transaction.slice(19, 30);
    const card = transaction.slice(30, 42);
    const hour = transaction.slice(42, 48);
    const store_owner = transaction.slice(48, 62).trim();
    const store_name = transaction.slice(62, 80).trim();

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
