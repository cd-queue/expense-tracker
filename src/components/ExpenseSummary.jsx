import React from 'react';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0)
  return (
    <>
      <div className='summary'>
        <p>TOTAL</p>
        <div className='total-box'>
        <p className='total'>₹{total}</p>
        </div>
      </div>
    </>
  )
}

export default ExpenseSummary