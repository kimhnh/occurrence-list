import { useState } from 'react';
import './assets/App.css';
import Navbar from './components/Navbar';

import OccurrenceList from './components/OccurrenceList';

const initialData = [
  {
    occurrence: 'Ace Trash Digger',
    choice: "Quickly, take it while he's not paying attention!",
    result: 'Discard 1 random Curio and obtain 3 random Normal Curios.',
  },
  {
    occurrence: 'Aha Stuffed Toy',
    choice: "Twist the switch on the doll's bottom!",
    result: 'Lose 50% of currently possessed Cosmic Fragments.',
  },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');

  // let occurrenceName = initialData.find((d) => search === d.occurrence)?.occurrence;
  let occurrenceName = initialData
    .map((el) => el.occurrence.toLowerCase())
    .filter((el) => el.includes(search));

  console.log(occurrenceName);

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (search === '') return;
  }

  return (
    <>
      <Navbar />
      <Container>
        <Search
          onSearchSubmit={handleSearchSubmit}
          search={search}
          setSearch={setSearch}
        />
        <OccurrenceList initialData={initialData} />
      </Container>
    </>
  );
}

function Search({ onSearchSubmit, search, setSearch }) {
  return (
    <form
      className='search'
      onSubmit={onSearchSubmit}
    >
      <input
        type='text'
        placeholder='Search for an occurrence...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='search-btn'>Search</button>
    </form>
  );
}

function Container({ children }) {
  return <div className='container'>{children}</div>;
}
