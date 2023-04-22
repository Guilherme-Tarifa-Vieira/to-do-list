import React, { useState } from "react";

import { MdAdd } from "react-icons/md";

import Card from "../Card";

import { Container } from "./styles";

export default function List({ data, index: listIndex }) {
  const [cards, setCards] = useState(data.cards);
  function handleAddCard() {
    const lastCardId = Math.max(...cards.map((card) => card.id));
    const newCard = {
      id: lastCardId + 1,
      content: "Novo Card [faça a edição do card para maior personalização]",
      labels: [],
      users: null,
      tasks: [],
    };
    setCards([...cards, newCard]);
    console.log(newCard.id);
  }

  return (
    <Container done={data.done} creatable={data.creatable}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button className="btn-edit" type="button" onClick={handleAddCard}>
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
