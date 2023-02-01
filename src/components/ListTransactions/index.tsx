import { ITransaction } from "../../contexts/interfaces";

import { v4 as uuidv4 } from "uuid";

const ListTransactions = ({ transaction }: { transaction: ITransaction }) => {
  const { type, date, value, cpf, card, hour, store_owner, store_name } =
    transaction;

  const newDate = date.replace(/(\d{4})(\d{2})(\d{2})/, "$3/$2/$1");
  const newHour = hour.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3");
  const newValue = parseInt(value.toString()).toFixed(2);

  const types = ["2", "3", "9"];
  const sign = types.includes(type.toString()) ? "-" : "";

  return (
    <ul key={uuidv4()}>
      <li>Tipo: {type}</li>
      <li>Data: {newDate}</li>
      <li>Hora: {newHour}</li>
      <li>
        Valor: {sign}
        {newValue}
      </li>
      <li>CPF: {cpf}</li>
      <li>Cartão: {card}</li>
      <li>Dono(a) {store_owner}</li>
      <li>Nome da loja: {store_name}</li>
    </ul>
  );
};

export default ListTransactions;
