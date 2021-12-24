import { Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { Header } from "./ui/Header";
import { theme } from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Typography variant="h1">Welcome to the Material fabric!</Typography>
    </ThemeProvider>
  );
}

export default App;
