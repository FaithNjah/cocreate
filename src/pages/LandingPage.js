import React from 'react'
import HomePage from "../components/landingPageSections/homePage";
import Benefits from '../components/landingPageSections/benefits';
import Features from '../components/landingPageSections/features';
import AboutUs from '../components/landingPageSections/aboutUs';
import FAQ from "../components/landingPageSections/faq"
import Form from "../components/landingPageSections/form"
import Footer from "../components/landingPageSections/footer"

const landingPage = () => {
  return (
    <div>
      <HomePage />
      <Benefits />
      <Features />
      <AboutUs />
      <FAQ />
      <Form />
      <Footer />
    </div>
  )
}

export default landingPage