import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    // 2 way
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const titleChangeHandler = (event) => {
        //1 way
        setTitleInput(event.target.value);
        //2 way
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // });
        
        //2.1 way
        // setUserInput((prevStat) => {
        //     return {
        //         ...userInput,
        //         enteredTitle : event.target.value
        //     }
        // });
    }
    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // });

        // setUserInput(() => {
        //     return {
        //         ...userInput,
        //         enteredAmount : event.target.value
        //     }
        // });
    }
    const dateChangeHandler = (event) => {
        setDateInput(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // });

        // setUserInput(() => {
        //     return {
        //         ...userInput,
        //         enteredDate : event.target.value
        //     }
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredData = {
            title: titleInput,
            amount: "$ "+amountInput,
            date: new Date(dateInput),
        }
        props.onSubmitNewExpense(enteredData);
        setAmountInput('');
        setDateInput('');
        setTitleInput('');
    }

    return (
        <form onSubmit={ submitHandler }>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>
                        Title
                    </label>
                    <input type='text' value = {titleInput} onChange={ titleChangeHandler } />
                </div>
                <div className='new-expense__control'>
                    <label>
                        Date
                    </label>
                    <input type='date' min='2019-01-1' max='2022-12-31' value = {dateInput} onChange = {dateChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>
                        Amount
                    </label>
                    <input type='number' min='0.01' step='0.01' value = {amountInput} onChange = {amountChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
               <button type='button' onClick={ props.onCancle }> Cancle </button>
                <button type='submit'> Add Expense </button>
            </div>
        </form>
    );
}
export default ExpenseForm;