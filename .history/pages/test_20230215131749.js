import FlippableDiv from '@/comp/flip'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/colours.json'
import Navigation from '@/comp/navBar'
import HeaderBar from '@/comp/header'
import SortingDropdown from '@/comp/sortingBtn'
import Router, { useRouter } from "next/router"
import React, { useState } from 'react'

function HomePage() {
    return (
      <div>
        <h1>Flippable Div Example</h1>
        <FlippableDiv />
      </div>
    );
  }
  
  export default HomePage;