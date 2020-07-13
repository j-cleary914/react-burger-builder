import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
//images must be imported like this :)

import styles from './Logo.module.css';

const Logo = (props) => (
  //taking in height prop to control size of it when declared instead of in css file
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;
