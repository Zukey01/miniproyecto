import React from "react";

function GameDetail({ game }) {
  return (
    <div style={{ color: "#000" }}> {/* Cambia el color del texto a negro */}
      <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>{game.name}</h2>
      <img
        src={game.image}
        alt={game.name}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
      />
      <p style={{ marginBottom: "5px" }}>Fecha de lanzamiento: {game.release_date || "Desconocida"}</p>
      <p style={{ marginBottom: "5px" }}>Rating: {game.rating || "Sin calificación"}</p>
      <p style={{ marginBottom: "10px" }}>Plataformas: {game.platforms.join(", ")}</p>
      <button
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          backgroundColor: "#000", // Fondo negro
          color: "#fff", // Texto blanco
          border: "2px solid #fff", // Borde blanco
          borderRadius: "30px", // Bordes redondeados
          cursor: "pointer",
          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)", // Sombra más pronunciada
          transition: "all 0.3s ease", // Transición suave
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#333"; // Fondo gris oscuro al pasar el cursor
          e.target.style.color = "#fff"; // Texto blanco
          e.target.style.transform = "scale(1.05)"; // Efecto de agrandamiento
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#000"; // Fondo negro al salir
          e.target.style.color = "#fff"; // Texto blanco
          e.target.style.transform = "scale(1)"; // Restablecer tamaño
        }}
      >
        Ver más detalles
      </button>
    </div>
  );
}

export default GameDetail;
