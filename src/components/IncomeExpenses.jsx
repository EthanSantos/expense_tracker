import {useContext} from 'react'

import { GlobalContext } from "../context/GlobalState"

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    var income = 0
    var expense = 0
    const amounts = transactions.map(transaction => transaction.amount) // new array of amounts

    for (let i = 0; i < amounts.length; i++){
        console.log(amounts[i])
        if (amounts[i] > 0){
            income += amounts[i]
        }
        else{
            expense += amounts[i]
        }
    }
    

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
