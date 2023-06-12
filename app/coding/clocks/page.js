'use client';

import React, { useState, useEffect } from 'react';
import styles from './clocks.module.css';

let hoursRotation = '0deg';
let minsRotation = '0deg';
let secsRotation = '0deg';

export default function Home() {
  const [time, setTime] = useState('');

  const timeArray = time.split(':');
  const hours = parseInt(timeArray[0]);
  const mins = parseInt(timeArray[1]);
  const secs = parseInt(timeArray[2]);

  useEffect(() => {
    setTimeout(() => {
      let now = new Date().toLocaleTimeString();
      setTime(now);

      secsRotation = 360 * (secs / 60) + 'deg';
      minsRotation = 360 * (mins / 60) + 'deg';
      hoursRotation = 360 * (hours / 12) + 'deg';
    }, 1000);
  });

  return (
    <main className={styles.main}>
      <h1>Clock</h1>
      <div id='clock'>
        <div
          className='minute_container clockface'
          style={{ ['rotate']: minsRotation }}
        >
          <div className='minute_hand'></div>
        </div>
        <div
          className='hour_container clockface'
          style={{ ['rotate']: hoursRotation }}
        >
          <div className='hour_hand'></div>
        </div>

        <div
          className='seconds_container clockface'
          style={{ ['rotate']: secsRotation }}
        >
          <div className='second_hand'></div>
        </div>
      </div>
      <p>{timeArray}</p>
      <p>
        {hours} {mins} {secs}
      </p>
      <p>
        {hoursRotation} {minsRotation} {secsRotation}
      </p>
    </main>
  );
}
