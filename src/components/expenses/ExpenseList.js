import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    if(props.filteredItems.length === 0) return <p className="expenses-list__fallback"> No Expenses Found </p>;
    const expenseItems = props.filteredItems.map(item => <ExpenseItem 
        key={item.id} 
        title={item.title} 
        amount={item.amount} 
        date={item.date} />);
    return <ul className="expenses-list">{expenseItems}</ul>;
}

export default ExpenseList;