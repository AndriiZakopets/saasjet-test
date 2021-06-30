import React, { useState } from 'react';
import useRequest from './hooks/useRequest';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  const [JQL, setJQL] = useState('');

  const filters = useRequest('/rest/api/3/filter/my');
  const statuses = useRequest('/rest/api/3/statuscategory');

  if (filters && statuses) {
    return (
      <div>
        <Filter filters={filters} setJQL={setJQL} />
        <Table JQL={JQL} statuses={statuses} />
      </div>
    );
  }
  return <div>Loading...</div>;
}

export default App;
