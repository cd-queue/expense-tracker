import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({expenses, deleteExpense}) => {
  return (
    <>
      {expenses.map((item, index) => {
        return (
          <ExpenseItem 
          expense={item}
          index={index}
          deleteExpense={deleteExpense}
          ></ExpenseItem>
        )
      })}
    </>
  )
}

export default ExpenseList