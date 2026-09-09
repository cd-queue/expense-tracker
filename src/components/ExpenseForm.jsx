import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    return (
        <>
            <div className='expense-form'>
                <h2>NEW ENTRY</h2>

                <div className="input-group">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder=" "
                    />
                    <label>Spent on</label>
                </div>

                <div className="input-group">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder=" "
                    />
                    <label>Amount in ₹</label>
                </div>

                <div className="input-group select-group">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>

                    <label>Category</label>

                    <span className="select-arrow">⌄</span>
                </div>


                <button onClick={() => {

                    if (title === "" || amount <= 0 || category === "") {
                        return alert("Form is invalid")
                    }
                    const expense = {
                        title,
                        amount,
                        category
                    };

                    console.log(expense);

                    addExpense(expense);
                    setTitle("");
                    setAmount("");
                    setCategory("");
                }}>
                    <span>+</span>
                    LOG IT
                </button>
            </div>
        </>
    )
}

export default ExpenseForm;