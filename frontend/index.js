import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

window.addEventListener('load', () => {
  const wrapper = document.getElementById('root');
  const displayName = document.getElementById('displayName');
  const repoPath = document.getElementById('repoPath');

  ReactDOM.render(
    <App displayName={displayName} repoPath={repoPath} />,
    wrapper,
  );
});
