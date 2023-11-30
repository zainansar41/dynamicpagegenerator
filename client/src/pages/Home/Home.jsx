import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './home.css'
import Hero from '../../components/HeroSection/Hero'
import Headline from '../../components/Headline/Headline'
import bg from '../../assets/bg.jpg'

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero himg={bg}  htag={"hero_tag"} hbtn={"BTN"} head={"Start Yout Journey with us"} hdesc={"let's build this in a different way"}/>
        <Headline />
        <Footer />
    </>
  )
}
