import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

import "./App.css";

const App = () => {
  const expenses = [
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
      date: new Date(2022, 9, 14),
    },
    {
      id: "e4",
      title: "Shopping",
      amount: 3500,
      date: new Date(2022, 9, 15),
    },
  ];

  return (
    <div className="App">
      <NewExpenses />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
