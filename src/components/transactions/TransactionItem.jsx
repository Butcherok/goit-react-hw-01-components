import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <>
            <td className={css.transItem}>{type}</td>
            <td className={css.transItem}>{amount}</td>
            <td className={css.transItem}>{currency}</td>
        </>
    );
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
