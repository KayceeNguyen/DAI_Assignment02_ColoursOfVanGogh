import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/colours.json'
// import Navigation from '@/comp/navBar'
// import HeaderBar from '@/comp/header'
// import SortingDropdown from '@/comp/sortingBtn'

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={styles.flipCardContainer} onClick={handleClick}>
        <div className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`}>
            <div className={styles.flipCardFront}>
                <h2>Front of Card</h2>
            </div>
            
            <div className={styles.flipCardBack}>
                <h2>Back of Card</h2>
            </div>
        </div>
    </div>
  );
}
