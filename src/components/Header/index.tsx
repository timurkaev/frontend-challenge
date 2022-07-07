import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <ul className={styles.navbar}>
        <NavLink to='/'>
          {({ isActive }) => (
            <li className={`${styles.navItem} ${isActive ? styles.active : ''}`}>Все котики</li>
          )}
        </NavLink>
        <NavLink to='/favorite'>
          {({ isActive }) => (
            <li className={`${styles.navItem} ${isActive ? styles.active : ''}`}>Любимые котики</li>
          )}
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
