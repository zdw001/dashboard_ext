import React, { useEffect, useRef } from 'react';
import astronautImg from '../assets/img/astronaut.png';

const Astronaut = ({getRandomNumber}) => {
  const docWidth = document.body.clientWidth;
  const docHeight = document.body.clientHeight;

  const astro = useRef();
  const astroImg = useRef();

  useEffect(() => {
    setPosition();

    setTimeout(() => {
      setPosition();
    }, 100)

    let int = setInterval(() => {
      setPosition();
    }, 8000)

    return () => {
      clearInterval(int)
    }
  }, []);

  const setPosition = () => {
    if (astro.current && astroImg.current) {
      if (parseInt(astro.current.style.left) % 2 === 0) {
        astro.current.style.left = `${getRandomNumber(-500, 0)}px`;
      } else {
        astro.current.style.left = `${getRandomNumber(docWidth, docWidth + 500)}px`;
      }

      astro.current.style.top = `${getRandomNumber(-500, docHeight + 500)}px`;
      astroImg.current.style.height = `${Math.floor(getRandomNumber(10, 140))}px`;
    }
  };

  return (
    <div ref={astro} className="astronaut">
      <img ref={astroImg} src={astronautImg} alt="astro" />
    </div>
  );
}

export default Astronaut;