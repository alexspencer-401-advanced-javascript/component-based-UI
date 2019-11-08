import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default class Character extends Component {

  state = {
    name: 'Armothy'
  }
  
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  };

  render() {
    const { img, name, species } = this.props;

    return (
      <li className={styles.Character}>
        <img src={img} />
        <div className={styles.characterInfo}>
          <h2>{name}</h2>
          <p>Species: {species}</p>
        </div>
      </li>
    );
  }
}

// const Character = ({ img, name, species }) => {
//   return (
//     <li className={styles.Character}>
//       <img src={img} />
//       <div className={styles.characterInfo}>
//         <h2>{name}</h2>
//         <p>Species: {species}</p>
//       </div>
//     </li>
//   );
// };

// Character.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   species: PropTypes.string.isRequired
// };

// export default Character;
