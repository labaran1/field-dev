import './App.css';
import Home from './Components/Pages/Home'

import AppState from './Context/AppContext/AppState'
function App() {
  return (
    <AppState>
  <Home/>
    </AppState>
  );
}

export default App;
