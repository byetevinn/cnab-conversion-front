import { Dispatch, ReactNode, SetStateAction } from "react";

/* export interface ITransactions {
  type: string;
  date: string;
  value: string;
  cpf: string;
  card: string;
  hour: string;
  store_owner: string;
  store_name: string;
} */

export interface ITransactionContext {
  setTransactions: Dispatch<SetStateAction<string[]>>;
}

export interface ITransactionContextProps {
  children: ReactNode;
}
