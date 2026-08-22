import React, { useState } from 'react'

const ExpenseForm = ({addExpense}) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    return (
        <>
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' />
                <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder='amount' />
                <select  value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>

                <button onClick={() => {

                    if(title === "" || amount <= 0 || category === "")
                    {
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
                }}>Add Expense</button>
            </div>
        </>
    )
}

export default ExpenseForm;