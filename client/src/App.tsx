import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Create Deck</button>
      </form>
    </div>
  );
}

export default App;
