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
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='category'/>
                <button onClick={() => {
                    const expense = {
                        title,
                        amount,
                        category
                    };

                    console.log(expense);

                    addExpense(expense);
                }}>Add Expense</button>
            </div>
        </>
    )
}

export default ExpenseForm;