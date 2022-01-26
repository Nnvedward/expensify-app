import React from "react"
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { addExpense } from "../actions/expenses"
import { useNavigate } from "react-router-dom"

const AddExpensePage = (props) => {
    const history = useNavigate()
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                handleSubmit={(expense) => {
                    props.dispatch(addExpense(expense))
                    history('/')
                }} />
        </div>
    )
}

export default connect()(AddExpensePage)