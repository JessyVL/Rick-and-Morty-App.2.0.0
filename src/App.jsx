import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'

function App() {

  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)
  const url =`https://rickandmortyapi.com/api/location/${inputValue}`
  const [location ,getLocation,hasError] = useFetch(url)

  // Esta es la peticion (la 1era) de Locations 
  useEffect(() => {
    getLocation(url)
  }, [inputValue])


  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)
  }

  return (
    <div>
      <h1>Rick and Morty</h1>
        <form onSubmit={handleSubmit}>
          <input ref={inputLocation} type="text" />
          <button>Search</button>
      </form>
      { 
        hasError
          ? <h2> ✖️ Hey! You must provide and ID from 1 to 126 😓</h2>
          : (
            <>
              <LocationCard 
                location={location}
              />
              <div className='resident_container'>
                {
                  // le colocamos la url como key porque son elementos unicos (terminan con la id de cada character)
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                } 
            </div>
           </>
          )
        }
    </div>
  )
}
export default App
