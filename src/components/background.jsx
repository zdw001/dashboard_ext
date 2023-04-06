import Astronaut from "./astronaut";

const SearchBackground = () => {
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min + 1) + min
  }

  const getRandomColor = () => {
    const arrColors = ["ffffff", "ffecd3" , "bfcfff"];
    return "#"+arrColors[Math.floor((Math.random()*3))];
  }
  
  return (
    <div className="background">
      <Astronaut getRandomNumber={getRandomNumber}/>
      {
        [...Array(200)].map((e, i) => {
          let size = `${getRandomNumber(0.5, 2)}px`;
          return (
            <div className="star" 
              key={i}
              style={{
                top: `${getRandomNumber(0, 100)}%`, 
                left: `${getRandomNumber(0, 100)}%`, 
                backgroundColor: getRandomColor(),
                height: size,
                width: size,
                animationDelay: `${getRandomNumber(-2, 0)}s`
              }} />
          )
        })
      }
    </div>
  )
};

export default SearchBackground;