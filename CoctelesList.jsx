import React from "react";

function GameList({ games, onSelectGame }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {games.map((game) => (
        <li
          key={game.id}
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => onSelectGame(game)}
        >
          <img
            src={game.image}
            alt={game.name}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
              marginRight: "15px",
            }}
          />
          <div>
            <h3>{game.name}</h3>
            <p>Fecha de lanzamiento: {game.release_date || "Desconocida"}</p>
            <p>Rating: {game.rating || "Sin calificación"}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default GameList;
