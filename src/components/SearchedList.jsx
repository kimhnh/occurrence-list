import Occurence from './Occurrence';

export default function SearchedList({ initialData, onAddEncountered, query }) {
  return (
    // filter only titles
    <ul className='list'>
      {query &&
        initialData
          .filter((el) => el.title.toLowerCase().includes(query))
          .map((occ) => (
            <Occurence
              key={crypto.randomUUID()}
              occ={occ}
              onAddEncountered={onAddEncountered}
            />
          ))}
    </ul>
  );
}
