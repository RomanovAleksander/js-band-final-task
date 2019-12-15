import React from 'react';

import './errorIndicator.css';

export const ErrorIndicator = ({ status }) => {
  return (
    <>
    <div className="error-indicator">
      Ops... Something went wrong
      {status &&  <p>Try Re-Sign-In</p>}
    </div>
    </>
  )
};
