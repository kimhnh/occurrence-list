export default function DisplayEncounteredList({ encountered }) {
  return (
    <>
      <p>You have encountered the following occurrences:</p>
      <p>{encountered.map((el) => el.title).join(', ')}</p>
    </>
  );
}
