import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Character from './characters/Character';
import List from './List';
import styles from './App.css';
import rickAndMortyCharacters from '../data';

const App = () => (
  <React.Fragment>
    <Header />
    <ul className={styles.App}>
      <List
        items={rickAndMortyCharacters}
        Component={Character}
      />
    </ul>

    <Footer />
  </React.Fragment>
);

export default App;
