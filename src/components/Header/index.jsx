import React from 'react';

import styles from './styles.css';
import icon from './icon.svg';

const Header = () => (
  <header>
    <img src={icon} />
    <h1 className={styles.highlight}>Scoped CSS (css modules)</h1>
  </header>
);

export default Header;
