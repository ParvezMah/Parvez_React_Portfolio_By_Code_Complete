import styles from './App.module.css'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
    </div>
  )
}

export default App
