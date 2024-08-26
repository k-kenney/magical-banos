import Contact from "../components/Contact"
import BanosGetaway from "../components/Homepage/BanosGetaway"
import HomepageHero from "../components/Homepage/HomepageHero"
import HomepageTopCards from "../components/Homepage/HomepageTopCards"
import ItineraryCards from "../components/Homepage/ItineraryCards"
import MustSeeCards from "../components/Homepage/MustSeeCards"
import Unwind from "../components/Homepage/Unwind"
import heroImage from "../assets/banos-hero.jpg";



const cards = [
  {
    image: heroImage,
    title: '1 Day in Baños',
    description: 'Description for card 1',
    buttonLabel: 'Learn More',
  },
  {
    image: heroImage,
    title: '2 Days in Baños',
    description: 'Description for card 2',
    buttonLabel: 'View Details',
  },
  {
    image: heroImage,
    title: '3 Days in Baños',
    description: 'Description for card 3',
    buttonLabel: 'Get Started',
  },
  {
    image: heroImage,
    title: '5 Days in Baños',
    description: 'Description for card 4',
    buttonLabel: 'Get Started',
  },
  {
    image: heroImage,
    title: '1 Week in Baños',
    description: 'Description for card 5',
    buttonLabel: 'Get Started',
  },
];


const Homepage = () => {
  return (
    <>
    <HomepageHero />
    <BanosGetaway />
    <HomepageTopCards />
    <Unwind />
    <ItineraryCards cards={cards}/>
    <MustSeeCards />
    <Contact />
    </>
  )
}

export default Homepage