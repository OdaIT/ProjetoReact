import './App.css'
import UserProfile from './components/UserProfile'
import WelcomeMessage from './components/WelcomeMessage'
import LeetWelcome from './components/LeetWelcome'
import ProductCard from './components/ProductCard'
import HeroCard from './components/HeroCard'

function App() {
  return (
    <>
    {UserProfile()}
    {WelcomeMessage()}
    {LeetWelcome()}
    {ProductCard()}
    <HeroCard name="Spider-Man" superpower="Teia" isVillain={false} />
    <HeroCard name="Magneto" superpower="Magnetismo" isVillain={true} />
    <HeroCard name="Batman" superpower="Rico" isVillain={false} />
    </>
  )
}

export default App