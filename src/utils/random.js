const getRandomElement = (elements) => {
    const indexRandom = Math.floor(Math.random() * elements.length);    /* esto me genera un numero entero aleatorio que usare como index */
    return elements[indexRandom];    
   };


export {getRandomElement};