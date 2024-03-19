import { initialData } from '../data';
import Button from './ui/Button';
import Occurence from './Occurrence';

export default function SearchedList({ query, selectOccurrence, setSelectOccurrence }) {
  return (
    /* 
    1. filter to only titles
    2. use titles to search for "occurrence"
    3. show results
    4. click one single "occurrence" (save state) --> display detail
    */

    <div className='query-result'>
      {initialData
        .filter((el) => el.title.toLowerCase().includes(query))
        .map((occ) => (
          <Occurence
            key={crypto.randomUUID()}
            occ={occ}
          >
            {!selectOccurrence && (
              <Button
                className='btn-show-occurrence'
                onClick={() => setSelectOccurrence(occ)}
              >
                {occ.title}
              </Button>
            )}
          </Occurence>
        ))}
    </div>
  );
}
