'use client';

import React, { useState, useEffect } from 'react';
import styles from './anagrams.module.scss';

function Anagrams() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [match, setMatch] = useState(false);

  useEffect(() => {
    console.log('checking:', inputA, inputB);
    anagrams(inputA, inputB);
  }, [inputA, inputB, match]);

  function anagrams(stringA, stringB) {
    // process strings an return an array
    const arrA = process(stringA);
    const arrB = process(stringB);
    console.log('Lets, make an anagram check of', stringA, ' and ', stringB);
    if (arrA === arrB && stringA !== '' && stringA.length > 1) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }

  const process = (str) => {
    // remove spaces, punctuation and lowercase / sort str
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  };

  const handleA = (e) => {
    setInputA(e.target.value);
  };

  const handleB = (e) => {
    setInputB(e.target.value);
  };

  return (
    <div>
      <h1>Anagrams</h1>
      <p>
        Check to see if two provided strings are anagrams of each other. One
        string is an anagram of another if it uses the same characters in the
        same quantity.
      </p>
      <ul>
        <li>Only consider characters, not spaces or punctuation</li>
        <li>Consider capital letters to be the same as lower case</li>
      </ul>
      <form>
        <div>
          <label>Input A</label>
          <input
            type='text'
            name='inputA'
            id='inputA'
            value={inputA}
            onChange={handleA}
            className={styles.compare}
          />
        </div>
        <div>
          <label>Input B</label>
          <input
            className={styles.compare}
            type='text'
            name='inputA'
            id='inputA'
            value={inputB}
            onChange={handleB}
          />
        </div>

        {!match ? (
          <h2>NOT AN ANAGRAM</h2>
        ) : (
          <h2 className={styles.match}>MATCH! AN ANAGRAM</h2>
        )}
      </form>
      <pre>
        <strong>Examples:</strong>
        <br />
        anagrams(rail safety, fairy tales) === true
        <br />
        anagrams(RAIL! SAFETY!, fairy tales) === true
        <br />
        anagrams(Hi there, Bye there) === false
      </pre>
    </div>
  );
}

export default Anagrams;
