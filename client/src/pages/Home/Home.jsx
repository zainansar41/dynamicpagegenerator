import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './home.css'

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="empty"></div>
        <h1>Home page</h1>
        <Footer />
    </>
  )
}
