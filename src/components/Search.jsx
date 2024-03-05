export default function Search({ query, onQuerySearch }) {
  // function handleSubmitSearch(e) {
  //   e.preventDefault();
  // }

  return (
    <input
      type='text'
      placeholder='Search for an occurrence...'
      value={query}
      onChange={(e) => onQuerySearch(e)}
    />
  );
}
