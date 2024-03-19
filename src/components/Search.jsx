import { useEffect } from 'react';

export default function Search({ query, setQuery, inputEl }) {
  function handleQuerySearch(e) {
    setQuery(e.target.value);
  }

  // listen to ESC key:
  // 1. focus on inputEl
  // 2. if focused, don't do anything
  // 3. if not focused, delete query
  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputEl.current) return;

      // listen for enter key to focus on input element
      if (e.code === 'Enter') {
        // console.log(inputEl.current); // dom element
        inputEl.current.focus();
        setQuery('');
      }
    }

    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [setQuery]);

  // Escape out of focus
  useEffect(() => {
    function callback(e) {
      if (e.code === 'Escape' && query === '') {
        inputEl.current.blur();
      }
    }

    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [query]);

  return (
    <input
      type='text'
      placeholder='Search for an occurrence...'
      value={query}
      onChange={(e) => handleQuerySearch(e)}
      ref={inputEl}
    />
  );
}
