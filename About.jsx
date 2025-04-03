import React from "react";
import { Grid, Typography, Card } from "@mui/material";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={3}
        style={{
          backgroundImage: "url('/images/imagen.jpeg')", // Ruta local de la imagen
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo blanco semitransparente
            }}
          >
            <Typography variant="h3" style={{ color: "#333", fontWeight: "bold", marginBottom: "20px" }}>
              Acerca de Nosotros
            </Typography>
            <Typography variant="h6" style={{ color: "#555", lineHeight: "1.8", marginBottom: "20px" }}>
              Esta aplicación fue creada para los amantes de los cócteles. Aquí puedes explorar recetas, aprender sobre tus bebidas favoritas y descubrir nuevas combinaciones.
            </Typography>
            <Typography variant="body1" style={{ color: "#777" }}>
              ¡Gracias por visitarnos y disfrutar de nuestra colección de cócteles!
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default About;

