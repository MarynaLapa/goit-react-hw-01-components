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
      <li className="item"
            key={data.id}
            style={{
                backgroundColor: getRandomColor(),
            }}>
        <span className="label">{data.label}</span>
        <span className="percentage">{data.percentage}</span>
    </li>
  );
  return (
    <section className="statistics">
        {title !== null ? (<h2 className="title">{title}</h2>) : ('')}
        <ul className="stat-list">
            {listItems}
        </ul>
    </section>
    )
}

