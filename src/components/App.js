import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Character from './characters/Character';
import styles from './App.css';

const App = () => (
  <React.Fragment>
    <Header />
    <ul className={styles.App}>
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/25.jpeg"
        name="Armothy"
        species="unknown, Self-aware arm"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/56.jpeg"
        name="Bootleg Portal Chemist Rick"
        species="Human"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/91.jpeg"
        name="David Letterman"
        species="Human"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/363.jpeg"
        name="Trandor"
        species="Alien, Krootabulan"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/145.jpeg"
        name="Glenn"
        species="Human, Eat shiter-Person"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/426.jpeg"
        name="Greasy Grandma"
        species="Human, Grandma"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/230.jpeg"
        name="Morty Jr."
        species="Humanoid, Human Gazorpian"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/187.jpeg"
        name="Juggling Rick"
        species="Human"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/356.jpeg"
        name="Tom Randolph"
        species="Human"
      />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/470.jpeg"
        name="Alien Spa Employee"
        species="Alien"
      />
    </ul>

    <Footer />
  </React.Fragment>
);

export default App;
