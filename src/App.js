import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Internet Bill",
    amount: 500,
    date: new Date(2022, 9, 10),
  },
  {
    id: "e2",
    title: "Electricity Bill",
    amount: 1459,
    date: new Date(2022, 9, 5),
  },
  {
    id: "e3",
    title: "Netflix Bill",
    amount: 750,
    date: new Date(2020, 9, 14),
  },
  {
    id: "e4",
    title: "Shopping",
    amount: 3500,
    date: new Date(2021, 9, 15),
  },
];

const App = () => {
  const [expensesArr, setExpensesArr] = useState(DUMMY_EXPENSES);

  const expenseDataHandler = (data) => {
    const expenses = {
      ...data,
      id: Math.random().toString(),
    };

    setExpensesArr((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpenses expenseDataReceiver={expenseDataHandler} />
      <Expenses items={expensesArr} />
    </div>
  );
};

export default App;
