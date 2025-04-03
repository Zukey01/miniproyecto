import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#000", // Cambia el color de fondo a negro
        boxShadow: "none", // Opcional: elimina la sombra
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          style={{
            flexGrow: 1,
            color: "#fff", // Texto blanco
            fontWeight: "bold",
          }}
        >
          Mi Cócteles
        </Typography>
        <Button color="inherit" component={Link} to="/" style={{ color: "#fff" }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/search" style={{ color: "#fff" }}>
          Buscar
        </Button>
        <Button color="inherit" component={Link} to="/about" style={{ color: "#fff" }}>
          Acerca de Nosotros
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
