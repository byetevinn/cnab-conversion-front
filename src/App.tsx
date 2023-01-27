import "./App.css";
import Transaction from "./components/Form";
import TransactionProvider from "./contexts/TransactionsContext";

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <Transaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
