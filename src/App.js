import { useState } from "react";
import Header from "./components/Header";
import GlobalStyle, { AppContainer } from "./theme/style";
import PokeLibrary from './containers/PokeLibrary'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <PokeLibrary />
      </AppContainer>
    </>
  );
}

export default App;
