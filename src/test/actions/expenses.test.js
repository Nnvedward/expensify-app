import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import db from '../../firebase/firebase'
import { onValue, ref } from 'firebase/database';

const createMockStore = configureMockStore([thunk])

test('Should setup remove expenese action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note'
        }
    })
})

test('Should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    })
})

test('Should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This is a rat',
        createdAt: 1222
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        onValue(ref(db, `expenses/${actions[0].expense.id}`), (snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
    })
})

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        })

        onValue(ref(db, `expenses/${actions[0].expense.id}`), (snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefault)
            done()
        })
    })
})


// test('Should setup add expense action object with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })