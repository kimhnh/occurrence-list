export default function ShowEncounteredList({ list }) {
  return (
    <div className='list'>
      <p>You have encountered the following occurrences:</p>
      <p>{list.map((el) => el.title).join(', ')}</p>
    </div>
  );
}
