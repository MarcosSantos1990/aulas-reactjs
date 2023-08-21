import './App.css';
import Cards from './components/Cards';
import Links from './components/Links';
 
function App() {
  const mostrar = "true"
  return(
      <div className='App'>
        <Cards />
        <Links mostrar = {mostrar} />
      
      </div>

  );
}

export default App;