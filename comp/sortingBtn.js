import React, { useState } from "react"
import styles from '@/styles/Home.module.css'
import Router, { useRouter } from "next/router"
import record from '../data/colours.json'

// const r = useRouter()

const SortingDropdown = () => {
  const [sortAttribute, setSortAttribute] = useState("Post-Impressionism");

  const handleChange = (event) => {
    setSortAttribute(event.target.value);
    console.log(sortAttribute)
  };

  const sortData = (record) => {
    return record.filter((rec, index) => rec.Style === sortAttribute);
  };

  return (
    <div>
      <select value={sortAttribute} onChange={handleChange}>
        <option value="Post-Impressionism">Post-Impressionism</option>
        <option value="Realism">Realism</option>
        <option value="Neo-Impressionism">Neo-Impressionism</option>
        <option value="Japonism">Japonism</option>
        <option value="Impressionism">Impressionism</option>
      </select>

      <button onClick={sortData(rec, index)}>Sort</button>
      <ul>
        {sortData().map((rec) => (
          <li key={rec.id}>{rec.title}</li>
        ))}
      </ul>
    </div>
  );
};

  
export default SortingDropdown;

