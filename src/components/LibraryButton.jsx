import React from 'react';

// Accepts both ButtonLabel and buttonLabel so either spelling works
const LibraryButton = ({ ButtonLabel, buttonLabel, actionButton }) => {
  return (
    <button
  onClick={actionButton}
  style={{
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid black',
    padding: '10px',
    cursor: 'pointer'
  }}
>
  {buttonLabel}
</button>
  )}

export default LibraryButton;
