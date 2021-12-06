import React from 'react'
import Card from './Card'

function App() {
  const img = 'https://picsum.photos/200/100'
  const card = {
    title: 'Card title',
    text: 'Card text card text card text card text card text card text card text',
    button: 'Click here'
  }
  return (
    <Card img = {img}>
      <h5 className="card-title">{card.title}</h5>
      <p className="card-text">{card.text}</p>
      <button className="btn btn-primary">{card.button}</button>
    </Card>
  );
}

export default App;
