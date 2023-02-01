import { useContext } from "react";

import { TransactionContext } from "../../contexts/TransactionsContext";
import Header from "../../components/Header";
import Form from "../../components/Form";

import Container from "./style";
import ListTransactions from "../../components/ListTransactions";

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <Header />
      <Container>
        <Form />
        <div>
          {transactions.length > 0 &&
            transactions.map((transaction) => {
              return ListTransactions({ transaction });
            })}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
