import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { IFormData } from "./interfaces";

const Form = () => {
  const { register, handleSubmit } = useForm<IFormData>();

  const { setTransactions } = useContext(TransactionContext);

  const onTransactions = async (data: IFormData) => {
    const allTransactions = data.transactions.match(/.{1,81}/g);

    setTransactions(allTransactions!);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onTransactions)}>
        <input type="text" {...register("transactions")} />
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default Form;
