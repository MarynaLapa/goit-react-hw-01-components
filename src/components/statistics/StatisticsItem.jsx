import css from './statistics.module.css';
import getRandomColor from './getRandomColor';

const StatisticsItem = ({ label, percentage }) => (
    <li className={css.items}
            style={{
                backgroundColor: getRandomColor(),
            }}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
)

export default StatisticsItem; 
