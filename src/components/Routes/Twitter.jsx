import React, {useEffect} from 'react';

function Twitter() {
  useEffect(() => {
    window.location.href = 'https://twitter.com/DUHacks';
  }, []);
  return <div></div>;
}

export default Twitter;
