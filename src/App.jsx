import { useState } from 'react';
import { initialData } from './data.jsx';
import Button from './components/Button.jsx';
import Container from './components/Container.jsx';
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

  // derived state
  const progress = list.length === 0 ? 0 : (list.length / initialData.length) * 100;
  const isAdded = list.some((el) => el.id === selectOccurrence.id); // check if occ already added
  const isThereList = list.length > 0;

  // add escape side effect

  // event handlers
  function handleQuerySearch(e) {
    setQuery(e.target.value);
  }

  // Add to list ------------------------------------- ISSUE WITH ADDING OCCURRENCE
  function handleAddOccurrence(occ) {
    // guard clause to prevent adding duplicates
    if (list.some((el) => el.id === occ.id)) return;
    setList((e) => [...e, occ]);
    setSelectOccurrence('');
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
      <Navbar progress={progress}>
        <Button
          className={isThereList ? 'btn-nav' : 'btn-disabled'}
          disabled={isThereList ? false : true}
          onClick={handleShowList}
        >
          {showList ? 'Close' : 'Show'}
        </Button>
        <Button
          className={isThereList ? 'btn-nav' : 'btn-disabled'}
          disabled={isThereList ? false : true}
          onClick={handleDeleteList}
        >
          Delete
        </Button>
      </Navbar>

      <Container>
        <Search
          query={query}
          onQuerySearch={handleQuerySearch}
        />

        {query && (
          <>
            <SearchedList
              initialData={initialData}
              query={query}
              selectOccurrence={selectOccurrence}
              setSelectOccurrence={setSelectOccurrence}
            />
            {selectOccurrence && (
              <ShowOccurrenceDetail selectOccurrence={selectOccurrence}>
                <Button
                  className={isAdded ? 'btn-disabled' : 'btn-add'}
                  onClick={() => handleAddOccurrence(selectOccurrence)}
                  disabled={isAdded}
                >
                  {isAdded ? 'Already added' : 'Add'}
                </Button>
                <Button
                  className='btn-close'
                  onClick={handleCloseOccurrence}
                >
                  Close
                </Button>
              </ShowOccurrenceDetail>
            )}
          </>
        )}
        {showList && <ShowEncounteredList list={list} />}
      </Container>
    </div>
  );
}
