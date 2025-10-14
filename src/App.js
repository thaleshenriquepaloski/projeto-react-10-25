import Header from './components/Header/index';
import styled from 'styled-components';
import Search from './components/Search';
import UltimosLancamentos from './components/UltimosLancamentos';

const AppDivContainer = styled.div`

      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #002f52 35%, #326589);


  li {
      list-style: none;
  }
`

function App() {
  return (
    <AppDivContainer>
      <Header />
      <Search />
      <UltimosLancamentos />
    </AppDivContainer>
  );
}

export default App;
