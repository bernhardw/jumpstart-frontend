import React from 'react';

import Header from './Header';
import image from '../assets/img/image.png';

const App = () => {
  return (
    <div>
      <Header />
      <img src={image} />
    </div>
  );
};

export default App;
