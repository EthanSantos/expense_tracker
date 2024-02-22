import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

import Transaction from "./Transaction"

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key = {transaction.id} transaction = {transaction}/> 
                    // render a transaction component for every transaction in the global state
                ))}
            </ul>
        </div>
    ) 
}

export default TransactionList
