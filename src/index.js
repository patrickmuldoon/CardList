import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './list';

const Board = ({board : {title, lists}}) => (
  <div className="board">
    <h4 className="board-title">{title}</h4>
    <div className="board-lists">
      {lists.map(list => <List key={list.id} list={list}/>)}
    </div>
  </div>
)

let list1 = {
  id: 1,
  title: 'lyrics',
  cards: [
    {
      id: 0,
      title: 'Saved'
    },
    {
      id: 1,
      title: 'Pretty Girl'
    },
    {
      id: 2,
      title: 'Devils \'N Demons'
    },
    {
      id: 3,
      title: 'South Drive'
    }
  ]
};

let list2 = {
  id: 2,
  title: 'Food',
  cards: [
    {
      id: 0,
      title: 'Pizza'
    },
    {
      id: 1,
      title: 'Lasagna'
    },
    {
      id: 2,
      title: 'Sandwhiches'
    },
    {
      id: 3,
      title: 'Applie pie'
    }
  ]
};

let list3 = {
  id: 3,
  title: 'Drinks',
  cards: [
    {
      id:0,
      title:'Soda'
    },
    {
      id:1,
      title:'juice'
    },
    {
      id:2,
      title:'water'
    },
    {
      id:3,
      title:'beer'
    },
    {
      id:4,
      title:'wine'
    }
  ]
}

let testBoard = {
  title: 'A demo of a list of cards',
  lists: [list1, list2, list3]
};

ReactDOM.render(
  <Board board={testBoard} />,
  document.getElementById('root')
);
