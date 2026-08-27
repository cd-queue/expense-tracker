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
      return i !== index;
    });

    setExpenses(updatedExpenses)
  };

  return (
    <>
      <div className='app'>
        <h1>Expense Tracker</h1>
        <p>Track your daily spending</p>

        <div className='top-section'>

          <ExpenseForm addExpense={addExpense} />
          <ExpenseSummary expenses={expenses} />

        </div>

        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
        />
      </div>
    </>
  )
}

export default App
