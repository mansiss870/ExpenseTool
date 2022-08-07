import React, {useState} from 'react';
import Expenses from './components/expenses/Expenses';
import './App.css';
import NewExpense from './components/newExpense/NewExpense';

const DUMMY_DATA = [
  {id : "e1", date : new Date(2022, 2, 2), title : "Mugs", amount: "22"},
  {id : "e2", date : new Date(2022, 1, 4), title : "Notebooks", amount: "45"},
  {id : "e3", date : new Date(2021, 2, 23), title : "Lamp", amount: "26"},
  {id : "e4", date : new Date(2020, 2, 25), title : "Sugar", amount: "25"},
];

const App = () => {
  const [expenseItems,setExpenseItems] = useState(DUMMY_DATA);

  const newExpenseAddedHandler = (newExpense) =>{
    setExpenseItems((prevState)=>{
      console.log(newExpense);
      return [newExpense , ...prevState];
    });
  }
  return (
    <div className="App">
      <NewExpense onNewExpense = {newExpenseAddedHandler}/>
      <Expenses expenseItems = {expenseItems} />      
    </div>
  );
}

export default App;
