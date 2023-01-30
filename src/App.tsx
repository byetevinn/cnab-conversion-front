import { ToastContainer } from "react-toastify";

import TransactionProvider from "./contexts/TransactionsContext";
import RoutesMain from "./routes/routes";

import "./App.css";
import Global from "./styles/global";

function App() {
  return (
    <TransactionProvider>
      <ToastContainer />
      <Global />
      <RoutesMain />
    </TransactionProvider>
  );
}

export default App;
