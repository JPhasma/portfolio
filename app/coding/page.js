import React from 'react';
import Button from '../components/Button/Button';

function Coding() {
  const handleYeyButton = () => {
    console.log('HANDLE YEY');
  };

  return (
    <div>
      <h1>Coding</h1>
      <p>
        Examples of coding challenges and short ideas I have been looking at.
      </p>
      <Button text='Yey' />
    </div>
  );
}

export default Coding;
