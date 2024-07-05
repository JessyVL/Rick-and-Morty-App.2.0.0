// con esta funcion tenemos los numeros de 0 a 125 considerando los numeros enteros , sumado +1 (para que sea de 1 a 126)
const getRandomNumber = limit => {
   return Math.floor(Math.random() * limit) +1 
}

export default getRandomNumber