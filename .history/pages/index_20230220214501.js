import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import { GFS_Didot } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/colours.json'
import Navigation from '@/comp/navBar'
import HeaderBar from '@/comp/header'
import SortingDropdown from '@/comp/sortingBtn'
import Router, { useRouter } from "next/router"
import React, { useState } from 'react'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const r = useRouter();
  
  return (
    <>
      <Head>
        <title>Colours of Van Gogh Home</title>
        <meta name="description" content="Welcome to Colours of Van Gogh, a website dedicated to exploring the vibrant and expressive world of Vincent Van Gogh's drawings." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/020-vincent-van-gogh.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet" />
      </Head>

      <HeaderBar />

      <main className={styles.mainHome}>
        <div className={styles.bigCont}>
          <div className={styles.overlay}>
            <div className={styles.portraitCont}>
              <img 
                  className={styles.portrait}
                  src="https://uploads5.wikiart.org/images/vincent-van-gogh/self-portrait-dedicated-to-paul-gauguin-1888.jpg!Large.jpg"
                  width={400}
                  height={400}
              />
              <h1>Vincent Van Gogh</h1>
              <p>"For my part I know nothing with any certainty, but the sight of the stars makes me dream..."</p>
            </div>

            <div className={styles.contentCont}>
              <div className={styles.contentTxt}>
                <p>Welcome to Colours of Van Gogh, a website dedicated to exploring the vibrant and expressive world of Vincent Van Gogh's drawings.

                  <br></br>
                  <br></br>

                  Here, you will find a curated selection of some of Van Gogh's most beloved and iconic drawings, presented alongside important information such as the name of the artwork, the year it was created, and most notably, the unique colour palette that defines each piece.

                  <br></br>
                  <br></br>

                  Whether you're a seasoned art lover or a curious newcomer to the world of fine art, Colours of Van Gogh is the perfect destination for anyone who appreciates the beauty and complexity of Van Gogh's art.

                  <br></br>
                  <br></br>

                  By showcasing the colour palettes of each drawing, we hope to provide a deeper understanding of Van Gogh's techniques and creative process, and offer a unique perspective on his work that is both educational and inspiring.
                  
                  <br></br>
                  <br></br>

                  So come and explore the rich and varied world of Van Gogh's drawings, and discover the many different shades, tones, and hues that make his art so enduringly popular and beloved.</p>
              </div>
              
              <button 
                className={styles.customBtn}
                onClick={
                  ()=>r.push("/gallery")}

              >View Gallery</button>
            </div>

            
            {/* <div className={styles.customBtn}>
              
            </div> */}

            
          </div>

          
          

          {/* <div className={styles.backgroundCont}>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div> 
            <div className={styles.clouds}></div>
          </div> */}

        </div>





      </main>
    </>
  )
}
