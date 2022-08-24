import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  return <Parent />;
}

const Parent = () => {
  useEffect(() => {
    console.log('Parent CDM');
  }, []);

  const openModal = () => {
    alert('Parent clicked');
  };
  console.log('parent body');
  return (
    <div className={'container'} onClick={openModal}>
      Parent 
      <Child />
    </div>
  );
};

const Child = ({}) => {
  useEffect(() => {
    console.log('Child CDM');
  }, []);

  console.log('Child body');

  const onAction = (e) => {
    alert('Child clicked');
  };
  return (
    <div className={'innerContainer'} onClick={onAction}>
      Child
    </div>
  );
};


// const data = {
//   'bangalore': {
//     "indiraNagar": {
//       '2star': 1,
//       '3star': 'Marion',
//     },
//   },
//   'gurgaon': {
//     '4star': 'dlf'
//   }
// }

// // output = ['Taj', 'Marion', 'dlf'];
