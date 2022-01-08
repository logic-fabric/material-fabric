import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { makeStyles, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { Header } from "./layout/Header/Header";
import { theme } from "./theme";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    maxWidth: theme.breakpoints.values.xl,
    margin: "auto",
    padding: "1rem",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />

        <main className={classes.mainContainer}>
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
              path="/web-design"
              element={<Typography variant="h1">Design web</Typography>}
            />

            <Route
              exact
              path="/web-development"
              element={<Typography variant="h1">Développement web</Typography>}
            />

            <Route
              exact
              path="/web-quality-audit"
              element={<Typography variant="h1">Audit qualité web</Typography>}
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
              element={
                <Typography variant="h1">Estimez votre projet</Typography>
              }
            />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
