import { createContext, useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  ITransactionContext,
  ITransactionContextProps,
  ITransaction,
} from "./interfaces";
import api from "../services/api";

export const TransactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext
);

const TransactionProvider = ({ children }: ITransactionContextProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const handleTransaction = (transaction: string) => {
    const type = transaction.slice(0, 1);
    const date = transaction.slice(1, 9);
    const value = parseInt(transaction.slice(9, 19)) / 100;
    const cpf = transaction.slice(19, 30);
    const card = transaction.slice(30, 42);
    const hour = transaction.slice(42, 48);
    const store_owner = transaction.slice(48, 62).trim();
    const store_name = transaction.slice(62, 80).trim();

    const transactionsObj = {
      type,
      date,
      value,
      cpf,
      card,
      hour,
      store_owner,
      store_name,
    };

    postTransactions(transactionsObj);
  };

  const postTransactions = async (data: ITransaction) => {
    return await api
      .post("/api/transactions/", data)
      .then((response) =>
        toast.success("Enviado com sucesso!", {
          autoClose: 1000,
          theme: "dark",
          toastId: 1,
        })
      )
      .catch((error) => {
        console.log(error);
        toast.error("Ocorreu um erro!", { autoClose: 1000, theme: "dark" });
      });
  };

  const getTransactions = async () => {
    return await api
      .get("/api/transactions/")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <TransactionContext.Provider
      value={{ handleTransaction, getTransactions, transactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
