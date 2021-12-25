import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { Header } from "./ui/Header";
import { theme } from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Typography variant="h1">
                Bienvenue dans la Material fabric !
              </Typography>
            }
          />

          <Route
            exact
            path="/services"
            element={<Typography variant="h1">Nos services</Typography>}
          />

          <Route
            exact
            path="/manifesto"
            element={<Typography variant="h1">Manifeste</Typography>}
          />

          <Route
            exact
            path="/about"
            element={<Typography variant="h1">Notre équipe</Typography>}
          />

          <Route
            exact
            path="/contact"
            element={<Typography variant="h1">Contactez-nous !</Typography>}
          />

          <Route
            exact
            path="/estimate"
            element={<Typography variant="h1">Estimez votre projet</Typography>}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
