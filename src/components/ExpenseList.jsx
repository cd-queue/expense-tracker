import React from 'react'

const ExpenseList = ({expenses}) => {
  return (
    <>
      {expenses.map(item => {
        return (
          <div key={item.title}>
          <p>Item: {item.title}</p>
          <p>Price: {item.amount}</p>
          <p>For:{item.category}</p>
          </div>
        )
      })}
    </>
  )
}

export default ExpenseList