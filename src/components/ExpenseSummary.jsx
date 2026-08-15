import React from 'react'

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0)
  return (
    <div>Total: ₹{total}</div>
  )
}

export default ExpenseSummary