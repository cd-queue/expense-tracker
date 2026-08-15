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

  return (
    <>
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseList expenses={expenses}/>
      <ExpenseSummary expenses={expenses}/>
    </>
  )
}

export default App
