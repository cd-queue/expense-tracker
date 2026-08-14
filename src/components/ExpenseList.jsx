import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({expenses}) => {
  return (
    <>
      {expenses.map(item => {
        return (
          <ExpenseItem expense={item}></ExpenseItem>
        )
      })}
    </>
  )
}

export default ExpenseList