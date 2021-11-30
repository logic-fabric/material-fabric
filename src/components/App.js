import { ThemeProvider } from "@material-ui/styles";

import { Header } from "./ui/Header";
import { theme } from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <h1>Welcome to the Material fabric!</h1>
    </ThemeProvider>
  );
}

export default App;
