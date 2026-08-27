import React from 'react';

const ExpenseItem = ({ expense, index, deleteExpense }) => {
  return (
    <>
      <div className='recent'>
        <h2>Recent Expenses</h2>
        <div className='recent-p'>
          <p>{expense.title}</p>
          <p>₹{expense.amount}</p>
          <p>{expense.category}</p>

          <button onClick={() => deleteExpense(index)}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default ExpenseItem;