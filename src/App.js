import Header from './componentes/Header';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components'; // Corrigido o nome da importação
import Pesquisa from './componentes/Pesquisa';

// Definição correta do componente estilizado
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
