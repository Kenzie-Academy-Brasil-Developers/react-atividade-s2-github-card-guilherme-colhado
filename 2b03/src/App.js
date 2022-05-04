import './App.css';
import { useState } from 'react'
import { ContainerSearch } from './components/Busca';
import { ItemGit } from './components/ItemGit';

function App() {
  const [listGit, setListGit] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <ContainerSearch listGit={listGit} setListGit={setListGit}/>
        {listGit.map((git, index)=><ItemGit key={index} git={git}/>)}
      </header>
    </div>
  );
}

export default App;
