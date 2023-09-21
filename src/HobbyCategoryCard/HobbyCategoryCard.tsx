import React from 'react';
import styles from './HobbyCategoryCard.module.css';

interface HobbyCardProps {
  imageUrl: string;
  cutPx: number;
  backgroundColor: string;
  link: string;
  name: string;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ imageUrl, cutPx, backgroundColor, link, name }) => (
  <a href={link} className={styles.card} style={{ backgroundColor }}>
    <div className={styles.content}>
      {name}
    </div>
    <div className={styles.imageContainer}>
      <img src={imageUrl} alt="Hobby" className={styles.image} style={{ right: `-${cutPx}px`, bottom: `-${cutPx}px` }} />
    </div>
  </a>
);

export default HobbyCard;
