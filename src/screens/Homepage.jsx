import Contact from "../components/Contact"
import BanosGetaway from "../components/Homepage/BanosGetaway"
import HomepageHero from "../components/Homepage/HomepageHero"
import HomepageTopCards from "../components/Homepage/HomepageTopCards"
import ItineraryCards from "../components/Homepage/ItineraryCards"
import MustSeeCards from "../components/Homepage/MustSeeCards"
import Unwind from "../components/Homepage/Unwind"


const Homepage = () => {
  return (
    <>
    <HomepageHero />
    <BanosGetaway />
    <HomepageTopCards />
    <Unwind />
    <ItineraryCards />
    <MustSeeCards />
    <Contact />
    </>
  )
}

export default Homepage