import { useState } from 'react';
import OccurrenceDetail from './OccurrenceDetail';

export default function Occurence({ occ, onAddEncountered }) {
  const [showOcc, setShowOcc] = useState('');

  // expand one occurrence and hide the rest

  return (
    <div>
      <button onClick={() => setShowOcc(occ)}>{occ.title}</button>
      {showOcc.id === occ.id && (
        <OccurrenceDetail
          occ={occ}
          onAddEncountered={onAddEncountered}
        />
      )}
    </div>
  );
}
