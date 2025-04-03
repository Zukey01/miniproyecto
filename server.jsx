const express = require("express");
const fetch = require("node-fetch");
const crypto = require("crypto");
require("dotenv").config(); // Carga las claves desde .env

const app = express();
const PORT = 5173;

// Variables de claves
const PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

// Ruta para obtener personajes de Marvel
app.get("/api/characters", async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Proporciona un término de búsqueda." });
  }

  const ts = new Date().getTime(); // Marca de tiempo
  const hash = crypto.createHash("md5").update(ts + PRIVATE_KEY + PUBLIC_KEY).digest("hex");

  try {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    );
    const data = await response.json();
    res.json(data); // Responde con los datos
  } catch (error) {
    console.error("Error al obtener datos de Marvel:", error);
    res.status(500).json({ error: "Error al obtener datos de Marvel." });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
