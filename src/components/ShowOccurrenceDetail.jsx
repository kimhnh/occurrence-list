import Button from './ui/Button';

export default function ShowOccurrenceDetail({
  list,
  selectOccurrence,
  onAddOccurrence,
  onCloseOccurrence,
}) {
  const isAdded = list.some((el) => el.id === selectOccurrence.id); // check if occ already added

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

      <Button
        className={isAdded ? 'btn-disabled' : 'btn-add'}
        onClick={() => onAddOccurrence(selectOccurrence)}
        disabled={isAdded}
      >
        {isAdded ? 'Already added' : 'Add'}
      </Button>
      <Button
        className='btn-close'
        onClick={onCloseOccurrence}
      >
        Close
      </Button>
    </article>
  );
}
