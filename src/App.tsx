import TransactionProvider from "./contexts/TransactionsContext";
import RoutesMain from "./routes/routes";

import "./App.css";
import Global from "./styles/global";

function App() {
  return (
    <TransactionProvider>
      <Global />
      <RoutesMain />
    </TransactionProvider>
  );
}

export default App;
