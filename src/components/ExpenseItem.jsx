import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, index, deleteExpense }) => {
  return (
    <>
        <div className='recent'>
          <p>{expense.title}</p>
          <p>₹{expense.amount}</p>
          <p>{expense.category}</p>

          <button onClick={() => deleteExpense(index)}>Delete</button>
      </div>
    </>
  )
}

export default ExpenseItem;