import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ img, name, species }) => {
  return (
    <li className={styles.Character}>
      <img src={img} />
      <div className={styles.characterInfo}>
        <h2>{name}</h2>
        <p>Species: {species}</p>
      </div>
    </li>
  );
};

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
