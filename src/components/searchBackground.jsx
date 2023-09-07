import Astronaut from "./astronaut";
import QuickLinks from "./quicklinks";
import Background from "../elements/background";

const SearchBackground = () => {
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min + 1) + min
  }
  
  return (
    <>
      <QuickLinks />
      <Astronaut getRandomNumber={getRandomNumber}/>
      <Background />
    </>
  )
};

export default SearchBackground;