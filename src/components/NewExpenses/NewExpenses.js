import React from "react";

import "./NewExpenses.css";

const NewExpenses = () => {
  return (
    <div className="new-expense">
      <form className="new-expense__form">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" min="2019-01-01" step="2022-12-31" />
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
