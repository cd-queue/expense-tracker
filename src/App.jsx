import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm/>
    </>
  )
}

export default App
