import React from 'react';

const ContextPage = () => {
  const { value, setValue } = useMyContext();

  return (
    <>
      <p>ContextPage</p>
      <p>Value from context: {value}</p>
      <button onClick={() => setValue('New Value')}>Change Value</button>
    </>
  );
};

export default ContextPage;
