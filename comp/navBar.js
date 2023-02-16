import React from "react"
import styles from '@/styles/Home.module.css'
import Router, { useRouter } from "next/router"
import { useState } from 'react'

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)

    const openMenu = () => {
        setIsOpen(true)
    }
    
  return (
    <>
         
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                {/* <input className={styles.checkbox} type="checkbox"/> */}
                { !isOpen ? 
                <>
                        <img 
                            src="/list.png"
                            width={60}
                            height={60}
                            className={styles.menuIcon}
                            onClick={openMenu} 
                        />
                </>
                    :
                    <>
                        <menu className={styles.menuOpen}>
                            <img 
                                src="/023-close.png"
                                width={30}
                                height={30}
                                className={styles.menuClose}
                                onClick={() => setIsOpen(false)}
                            />

                            <div className={styles.menuItems}>
                                <li className={styles.item}>
                                    <a href="/">Home</a>
                                </li>

                                <li className={styles.item}>
                                    <a href="/gallery">Gallery</a>
                                </li>
                            </div>
                        </menu>
                    </>
                }
            </div>
        </nav>

    </>
  );
};

export default Navigation;
