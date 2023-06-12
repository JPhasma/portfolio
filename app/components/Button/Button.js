'use client';

import React from 'react';

export default function Button({ text = 'Example Button', handle }) {
  if (handle) {
    console.log('COMING TOGETH');
  }
  return <button>{text}</button>;
}
