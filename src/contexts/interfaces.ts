import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ITransactions {
  type: string;
  date: string;
  value: number;
  cpf: string;
  card: string;
  hour: string;
  store_owner: string;
  store_name: string;
}

export interface ITransactionContext {
  handleTransaction: (transaction: string) => void;
}

export interface ITransactionContextProps {
  children: ReactNode;
}
