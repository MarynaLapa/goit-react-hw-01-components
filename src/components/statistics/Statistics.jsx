import css from './statistics.module.css'

function getRandomColor() {
  var letters = '789ABCD';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 7)];
  }
  return color;
}

export default function Statistics({ title = null, dataset }) {
  const listItems = dataset.map(data =>
      <li className={css.items}
            key={data.id}
            style={{
                backgroundColor: getRandomColor(),
            }}>
        <span className={css.label}>{data.label}</span>
        <span className={css.percentage}>{data.percentage}%</span>
    </li>
  );
  return (
    <section className={css.statistics}>
        {title !== null ? (<h2 className={css.title}>{title}</h2>) : ('')}
      <ul className={css.statList}>
            {listItems}
        </ul>
    </section>
    )
}

