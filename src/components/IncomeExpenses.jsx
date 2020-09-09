import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

IncomeExpenses.propTypes = {
    
};

function IncomeExpenses(props) {

    const { transactions } = useContext(GlobalContext)

    const income = transactions.map(transaction => transaction.amount > 0 ? transaction.amount : 0)
                                  .reduce((acc, item) => acc += item, 0)
                                  .toFixed(2);

    const expense = transactions.map(transaction => transaction.amount < 0 ? transaction.amount : 0)
                                    .reduce((acc, item) => acc += item, 0)
                                    .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
    );
}

export default IncomeExpenses;