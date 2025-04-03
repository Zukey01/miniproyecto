import React, { useState, useEffect } from "react";
import { TextField, Grid, Typography, CircularProgress, Button, Card, CardMedia, CardContent } from "@mui/material";
import Navbar from "../components/Navbar";

function Search({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery); // Almacena la entrada del usuario
  const [results, setResults] = useState([]); // Almacena los resultados de la búsqueda
  const [loading, setLoading] = useState(false); // Indicador de carga
  const [error, setError] = useState(""); // Mensajes de error
  const [selectedDrink, setSelectedDrink] = useState(null); // Almacena el cóctel seleccionado

  const fetchCocktails = async (searchQuery) => {
    setLoading(true);
    setError("");
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const url = searchQuery
        ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
        : "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      const response = await fetch(url, requestOptions);
      if (!response.ok) throw new Error("Error al obtener los datos");
      const result = await response.json();
      setResults(result.drinks || []);
    } catch (err) {
      setError(err.message || "Hubo un problema al realizar la búsqueda.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails(initialQuery); // Realiza una búsqueda inicial
  }, [initialQuery]);

  const handleSearch = () => {
    fetchCocktails(query); // Busca cócteles basados en la entrada del usuario
  };

  const handleShowDetails = (drink) => {
    setSelectedDrink(drink); // Establece el cóctel seleccionado
  };

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
        <Grid item xs={12} sm={10} md={8} style={{ margin: "0 auto" }}>
          <Card
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo blanco semitransparente
            }}
          >
            <Typography variant="h4" align="center" gutterBottom style={{ color: "#333", fontWeight: "bold" }}>
              Buscar Cócteles
            </Typography>
            <TextField
              fullWidth
              label="Escribe el nombre del cóctel..."
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ backgroundColor: "#fff", borderRadius: "5px", marginBottom: "20px" }}
            />
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                Buscar
              </Button>
            </div>
            {loading ? (
              <CircularProgress style={{ display: "block", margin: "0 auto", color: "#007BFF" }} />
            ) : error ? (
              <Typography color="error" align="center" style={{ fontSize: "18px", fontWeight: "bold" }}>
                {error}
              </Typography>
            ) : (
              <Grid container spacing={3}>
                {results.map((drink) => (
                  <Grid item xs={12} sm={6} md={4} key={drink.idDrink}>
                    <Card
                      style={{
                        maxWidth: 345,
                        margin: "0 auto",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={drink.strDrinkThumb}
                        alt={drink.strDrink}
                        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                      />
                      <CardContent>
                        <Typography variant="h6" gutterBottom style={{ color: "#333", fontWeight: "bold" }}>
                          {drink.strDrink}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleShowDetails(drink)}
                          style={{ marginTop: "10px" }}
                        >
                          Ver Detalles
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Card>
        </Grid>
        {selectedDrink && (
          <Grid item xs={12} sm={10} md={8} style={{ margin: "20px auto" }}>
            <Card
              style={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {selectedDrink.strDrink}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: "10px" }}>
                {selectedDrink.strInstructions || "Sin instrucciones disponibles."}
              </Typography>
              <img
                src={selectedDrink.strDrinkThumb}
                alt={selectedDrink.strDrink}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Search;

