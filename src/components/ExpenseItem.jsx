import React from 'react';

const ExpenseItem = ({expense, index, deleteExpense}) => {
  return (
    <div>
      <p>{expense.title}</p>
      <p>₹{expense.amount}</p>
      <p>{expense.category}</p>

      <button onClick={() => deleteExpense(index)}>Delete</button>
    </div>
  )
}

export default ExpenseItem;