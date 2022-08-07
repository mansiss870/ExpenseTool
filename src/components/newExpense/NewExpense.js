import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const showExpenseFormHandler = () =>{
        setShowExpenseForm(true);
    }
    const cancleExpenseFormHandler = () => {
        setShowExpenseForm(false);
    }
    const newExpenseHandler = (newEnteredExpense) => {
        let newExpense = {
            ...newEnteredExpense,
            id : Math.random().toString()
        };
        props.onNewExpense(newExpense);
        cancleExpenseFormHandler();
    }
    return (
        <div className='new-expense'>
            { !showExpenseForm && <button onClick = {showExpenseFormHandler}>Add New Expense</button>}
            { showExpenseForm && <ExpenseForm onSubmitNewExpense = { newExpenseHandler } onCancle = { cancleExpenseFormHandler } /> }
        </div>
    );
}

export default NewExpense;