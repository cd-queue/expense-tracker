import React from 'react';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0)
  return (
    <>
      <div className='summary'>
        <h2>Summary</h2>
        <p className='total'>Total: ₹{total}</p>
      </div>
    </>
  )
}

export default ExpenseSummary