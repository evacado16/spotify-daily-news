import React from 'react';
import styles from '../styles/components/Header.module.scss';
import '../styles/layout/header.scss';

const Header = () => {
    let containerClasses = [styles.container, 'headerContainer'].join(' ');

  return (
    <>
    <div className={containerClasses}>
        <img src="./spotify_logo.png" alt='Spotify Logo' className={styles.spotifyLogo} />
        <h1>Spotify Daily News</h1>
    </div>
    </>
  )
}

export default Header