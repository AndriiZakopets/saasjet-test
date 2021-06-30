import { useState, useEffect } from 'react';

function useRequest(url, cb) {
  if (typeof cb !== 'function') {
    cb = (el) => el;
  }

  const [resp, setResp] = useState(null);

  useEffect(() => {
    AP.request(url, {
      success(response) {
        const obj = JSON.parse(response);
        setResp(cb(obj));
      },
      error(err) {
        alert(`Error: ${err.status}: ${err.statusText} at ${url}`);
      },
    });
  }, [url]);

  return resp;
}

export default useRequest;
