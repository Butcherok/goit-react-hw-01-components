import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css['transaction-history']}>
            <thead className={css.tabHead}>
                <tr className={css.tabHeadList}>
                    <th className={css.tabHeadItem}>type</th>
                    <th className={css.tabHeadItem}>amount</th>
                    <th className={css.tabHeadItem}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.transBody}>
                {items.map(({ type, amount, currency, id }) => (
                    <tr key={id} className={css.transList}>
                        <TransactionItem
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};
