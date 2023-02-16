import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/colours.json'

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Search for: ${query}`);
    // perform search logic here
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <input className={styles.input}
        type="text"
        placeholder="Search for something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
    </div>
  );
}
