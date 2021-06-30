import React from 'react';

const defaultJQL = '';

function Filter({ filters, setJQL }) {
  function handleJQLChange(e) {
    setJQL(e.target.value);
  }

  return (
    <>
      Select filter:
      <select onChange={handleJQLChange}>
        <option value={defaultJQL}>default</option>
        {filters.map((filter) => (
          <option key={filter.id} value={filter.jql}>
            {filter.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default React.memo(Filter);
