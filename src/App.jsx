import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Jobs from './Components/JobDiv/Jobs'
import Values from './Components/ValueDiv/Values'
import Footer from './Components/FooterDiv/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Values/>
      <Footer/>
    </div>
  )
}
export default App

