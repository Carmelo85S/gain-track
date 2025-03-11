import HeroBox from '../home-hero/HeroBox'
import Navbar from '../navbar/Navbar'
import TrainingLevelsList from '../training-program/TrainingProgramList'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBox />
      <TrainingLevelsList />
    </>
  )
}

export default Home
