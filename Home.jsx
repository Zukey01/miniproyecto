import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={3}
        style={{
          backgroundImage: "url('images/imagen.jpeg')", // Alternativa 1: Ruta relativa sin barra inicial
          // backgroundImage: "url('/images/imagen.jpeg')", // Alternativa 2: Ruta absoluta
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            style={{
              color: "#fff", // Texto blanco para contraste
              fontWeight: "bold",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Sombra para mejor legibilidad
            }}
          >
            Bienvenido a Mi Cócteles
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#fff",
              marginBottom: "30px",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            Explora las mejores recetas de cócteles y encuentra tu bebida favorita.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#000", // Fondo negro
              color: "#fff", // Texto blanco
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "5px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            }}
            href="/search"
          >
            Explorar Cócteles
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
