export default function ShowOccurrenceDetail({ selectOccurrence, children }) {
  return (
    <article className='show-occ-detail'>
      <h2>{selectOccurrence.title}</h2>
      {Object.values(selectOccurrence)
        .splice(2)
        .map((el) => (
          <div
            className='prompt'
            key={crypto.randomUUID()}
          >
            <p className='occ-choice'>{el.choice}</p>
            <p className='occ-result'>
              Result:{' '}
              {el.result.length < 4 && el.result.length > 1 ? el.result.join(' ') : el.result}
            </p>
          </div>
        ))}
      {children}
    </article>
  );
}
