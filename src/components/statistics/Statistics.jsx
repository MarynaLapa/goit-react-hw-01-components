import css from './statistics.module.css'
import StatisticsItem from './StatisticsItem';

export default function Statistics({ title = null, dataset }) {

  return (
    <section className={css.statistics}>
        {title !== null ? (<h2 className={css.title}>{title}</h2>) : ('')}
      <ul className={css.statList}>
        {dataset.map(data => 
          <StatisticsItem
            key={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        )}
      </ul>
    </section>
    )
}

