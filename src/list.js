import React from 'react';

const List = ({list}) => (
  <div className="list">
    <h4 className="list-title">{list.title}</h4>
    <ul>
      {list.cards.map(item => <li className="list-item" key={item.id}>
        {item.title}
      </li>)}
    </ul>
    <div className="add-card">Add a card...</div>
  </div>
)


export default List;
