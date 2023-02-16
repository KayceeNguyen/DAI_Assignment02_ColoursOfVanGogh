import React, { useState } from "react"
import styles from '@/styles/Home.module.css'
import Navigation from '@/comp/navBar'
import Router, { useRouter } from "next/router";
import Head from 'next/head'
import Image from 'next/image'

const HeaderBar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

const r = useRouter();

  return (
    <>
            <header className={styles.headerContainer}>
                <img 
                    className={styles.headerIcon}
                    src="/020-vincent-van-gogh.png" 
                    width="60px"
                    onClick={
                        ()=>r.push("/")}
                />

                <h1>Colours of Van Gogh</h1>

                <Navigation 
                    className={styles.nav}
                    style={{width:'40px', height: '40px'}}
                />
            </header>
    </>
  );
};

export default HeaderBar;
