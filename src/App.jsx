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

  const [location ,getLocation,hasError,isLoading] = useFetch(url)


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
    <>
    {
      isLoading ?
      <h2> Loading ... </h2>
      :
    <div className='app'>
        <img className='app_banner' src="./src/assets/fondo-img.jpg" alt="banner de la aplicacion" />
        <form className='app_form' onSubmit={handleSubmit}>
          <input className='app_input' type="number" min={1} max={126} ref={inputLocation} />
          <button className='app_btn'>Search</button>
      </form>
      { 
        hasError
          ? <h2> ✖️ Hey! You must provide and ID from 1 to 126 😓</h2>
          : (
            <>
              <LocationCard 
                location={location}
              />
              <div className='app_container'>
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
     }
    </>
  )
}
export default App
