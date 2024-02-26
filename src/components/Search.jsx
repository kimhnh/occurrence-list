export default function Search({ query, onQuerySearch }) {
  return (
    <input
      type='text'
      placeholder='Search for an occurrence...'
      value={query}
      onChange={(e) => onQuerySearch(e)}
    />
  );
}
