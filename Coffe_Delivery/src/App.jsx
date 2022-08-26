import { ThemeProvider } from "styled-components";
import { Router } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
