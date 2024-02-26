export default function OccurrenceDetail({ occ, onAddEncountered }) {
  return (
    <div className='occurrence-detail'>
      <h2>{occ.title}</h2>

      {Object.values(occ)
        .slice()
        .splice(2)
        .map((el) => (
          <div
            className='prompt'
            key={crypto.randomUUID()}
          >
            <p>{el.choice}</p>
            <p>
              Result:{' '}
              {el.result.length < 4 && el.result.length > 1 ? el.result.join(' ') : el.result}
            </p>
          </div>
        ))}

      <button
        className='btn-add'
        onClick={() => onAddEncountered(occ)}
      >
        Add
      </button>
    </div>
  );
}
