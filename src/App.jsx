import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';
import ExpenseSummary from './components/ExpenseSummary';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    console.log("App received:", expense);

    setExpenses([
      ...expenses,
      expense
    ])
  };

  const deleteExpense = (index) => {
      const updatedExpenses = expenses.filter((expense, i) => {
        return i!== index;
      });

      setExpenses(updatedExpenses)
  };

  return (
    <>
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseList 
      expenses={expenses}
      deleteExpense={deleteExpense}
      />
      <ExpenseSummary expenses={expenses}/>
    </>
  )
}

export default App
