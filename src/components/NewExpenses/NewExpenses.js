import React, { useState } from "react";

import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.expenseDataReceiver(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div className="new-expense">
      <form className="new-expense__form" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              required
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              min="0.01"
              step="0.01"
              required
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              min="2019-01-01"
              step="2022-12-31"
              required
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenses;
