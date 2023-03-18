import PropTypes from 'prop-types';
import css from './Stats.module.css';

export const Statistics = ({stats}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{stats.title = 'Upload stats'}</h2>
            <ul className={css['stat-list']}>
                {stats.map(stat => (
                    <li key={stat.id} className={css.item}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>
                            {stat.percentage}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.string,
};
