import { useState } from 'react';
import { initialData } from './data.jsx';
import Button from './components/Button.jsx';
import Container from './components/Container.jsx';
import DisplayEncounteredList from './components/DisplayEncounteredList.jsx';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar.jsx';
import Search from './components/Search.jsx';
import SearchedList from './components/SearchedList.jsx';
import './assets/index.css';

export default function App() {
  const [query, setQuery] = useState(''); // search
  const [encountered, setEncountered] = useState([]); // add occ to list

  // derived state
  const progress = encountered.length === 0 ? 0 : (encountered.length / initialData.length) * 100;

  // add escape side effect

  // event handlers
  function handleQuerySearch(e) {
    setQuery(e.target.value);
  }

  // Add to list
  function handleAddEncountered(occ) {
    // guard clause to prevent adding duplicates
    if (encountered.some((el) => el.id === occ.id)) return;
    setEncountered((e) => [...e, occ]);
    setQuery('');
  }

  // Delete List
  function handleDeleteList() {
    setEncountered((e) => e.slice().splice());
    setQuery('');
  }

  return (
    <div className='app'>
      <Navbar />
      <Container>
        <ProgressBar progress={progress} />
        <Search
          query={query}
          onQuerySearch={handleQuerySearch}
        />
        <Button onClick={handleDeleteList}>Delete List</Button>
        <SearchedList
          initialData={initialData}
          onAddEncountered={handleAddEncountered}
          query={query}
        />
        {encountered.length > 0 && <DisplayEncounteredList encountered={encountered} />}
      </Container>
    </div>
  );
}
