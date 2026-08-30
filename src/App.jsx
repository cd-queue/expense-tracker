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
      <div className='app'>
        <header className='header'>
          <span className='header-sub'>LEDGER / 2026</span>
          <h1>Expense Tracker</h1>
          <p>Track your daily spending</p>
        </header>

        {/* Main Grid Container containing all 4 direct child cards */}
        <div className='deshboard-grid'>
          <ExpenseSummary expenses={expenses} />
          <ExpenseForm addExpense={addExpense} />
          <div className='by-category'>
            <h3>BY CATEGORY</h3>
            {/* Category content goes here  */}
          </div>
          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
          />
        </div>
      </div>
  )
}

export default App
