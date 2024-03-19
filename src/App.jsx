import { useRef, useState } from 'react';
import Container from './components/ui/Container.jsx';
import Navbar from './components/Navbar';
import Search from './components/Search.jsx';
import SearchedList from './components/SearchedList.jsx';
import ShowEncounteredList from './components/ShowEncounteredList.jsx';
import ShowOccurrenceDetail from './components/ShowOccurrenceDetail.jsx';
import './assets/index.css';

/* TODO:
- give proper keys to each children
- stylizing
*/

export default function App() {
  const [query, setQuery] = useState(''); // search for an occurrence
  const [selectOccurrence, setSelectOccurrence] = useState('');
  const [list, setList] = useState([]); // occ encountered list
  const [showList, setShowList] = useState(false);
  const inputEl = useRef(null);

  // event handlers
  // Add to list ------------------------------------- ISSUE WITH ADDING OCCURRENCE
  function handleAddOccurrence(occ) {
    // guard clause to prevent adding duplicates
    if (list.some((el) => el.id === occ.id)) return;
    setList((e) => [...e, occ]);
    setSelectOccurrence('');
    inputEl.current.focus();
    setQuery('');
  }

  // Close Selected Occurrence
  function handleCloseOccurrence() {
    setSelectOccurrence('');
    setQuery(''); // placeholder for now
  }

  // Show List
  function handleShowList() {
    if (list.length === 0) return;
    setShowList((s) => !s);
  }

  // Delete Entire List
  function handleDeleteList() {
    if (list.length === 0) return;
    setList((e) => e.slice().splice());
    setSelectOccurrence('');
    setQuery('');
  }

  return (
    <div className='app'>
      <Navbar
        list={list}
        showList={showList}
        onShowList={handleShowList}
        onDeleteList={handleDeleteList}
      />

      <Container>
        <Search
          query={query}
          setQuery={setQuery}
          inputEl={inputEl}
        />

        {/* Display Result/Item */}
        {query && (
          <>
            <SearchedList
              query={query}
              selectOccurrence={selectOccurrence}
              setSelectOccurrence={setSelectOccurrence}
            />
            {selectOccurrence && (
              <ShowOccurrenceDetail
                list={list}
                selectOccurrence={selectOccurrence}
                onAddOccurrence={handleAddOccurrence}
                onCloseOccurrence={handleCloseOccurrence}
              />
            )}
          </>
        )}

        {/* Display List */}
        {showList && <ShowEncounteredList list={list} />}
      </Container>
    </div>
  );
}
