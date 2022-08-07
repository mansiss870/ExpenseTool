import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2022');
    const filterHandler = (year) => {
        setSelectedYear(year);

    }
    const filteredItems = props.expenseItems.filter(item => {
        return item.date.getFullYear().toString() === selectedYear;
    });

    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onFilterApplied={filterHandler} />
                {/*
                1 way
                {filteredItems.length === 0 ? <p>No Expenses Found</p> : 
                filteredItems.map(item => <ExpenseItem 
                key={item.id} 
                title={item.title} 
                amount={item.amount} 
                date={item.date} />)
                } */
                }
                {
                /* 
                2nd way
                {filteredItems.length === 0 && <p>No Expenses Found</p>}
                {filteredItems.length > 0 && filteredItems.map(item => <ExpenseItem 
                key={item.id} 
                title={item.title} 
                amount={item.amount} 
                date={item.date} />)
                } */}

                {/* {
                    //3rd ways
                    expenseItems
                } */}
                <ExpenseList filteredItems = {filteredItems}/>
            </Card>
        </div>
    );
}

export default Expenses;