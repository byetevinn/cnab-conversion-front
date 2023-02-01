import { ReactNode } from "react";

export interface ITransaction {
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
  getTransactions: () => void;
  transactions: ITransaction[];
}

export interface ITransactionContextProps {
  children: ReactNode;
}
