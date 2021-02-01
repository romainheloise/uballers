import './App.css';
import GroundCard from './components/GroundCard';
import GroundsList from './components/GroundsList';
import { Switch, Route } from 'react-router-dom'
import data from './data/ground.json'
import { createContext, useEffect, useState } from 'react'

export const GroundContext = createContext([])

function App() {
  const [gList, setGlist] = useState([]);

  useEffect(() => {
    const groundArray = Object.values(data).map((g) => g);
    setGlist(groundArray);
  }, []);


  return (
    <div className="App">
      <Switch>
        <GroundContext.Provider value={[gList, setGlist]} >
          <Route exact path="/" component={GroundsList} />
          <Route path="/ground/:id" component={GroundCard} />
        </GroundContext.Provider  >
      </Switch>
    </div>
  );
}

export default App;
