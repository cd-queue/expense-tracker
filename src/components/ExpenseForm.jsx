import React, { useState } from 'react'

const ExpenseForm = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    return (
        <>
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='amount' />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='category' />
                <button onClick={() => {
                    const expense = {
                        title,
                        amount,
                        category
                    };

                    console.log(expense);
                }}>Add Expense</button>
            </div>
        </>
    )
}

export default ExpenseForm;