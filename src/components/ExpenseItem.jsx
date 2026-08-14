import React from 'react';

const ExpenseItem = ({expense}) => {
  return (
    <div>
      <p>{expense.title}</p>
      <p>₹{expense.amount}</p>
      <p>{expense.category}</p>
    </div>
  )
}

export default ExpenseItem;