import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import './App.css';

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
    </>
  )
}

export default App
