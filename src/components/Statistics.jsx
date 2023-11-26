import React from 'react';
import dataset from '../components/data.json';

export default function Statistics() {
  const listItems = dataset.map(data =>
    <li className="item" key={data.id}>
        <span className="label">{data.label}</span>
        <span className="percentage">{data.percentage}</span>
    </li>
  );
  return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
              {listItems}
            </ul>
        </section>
    )
}
