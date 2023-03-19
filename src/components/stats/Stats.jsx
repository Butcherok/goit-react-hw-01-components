import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/randomcolor';
import css from './Stats.module.css';

export const Statistics = ({ title = '', stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css['stat-list']}>
                {stats.map(stat => (
                    <li
                        style={{
                            backgroundColor: getRandomHexColor(),
                        }}
                        key={stat.id}
                        className={css.item}
                    >
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>
                            {stat.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};
