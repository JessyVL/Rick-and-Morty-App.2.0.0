import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import "./styles/ResidentCard.css"

// la url nos ayuda a realizar la peticion
const ResidentCard = ({url}) => {

// no manejaremos un hasError dado que estos son URL que la API nos esta dando , seria error en caso el servidor se caiga
// toda la informacion lo recibe 'resident'
    const [resident , getResident] = useFetch(url)

    // Esta es la peticion (2da) del residente
    useEffect(() => {
      getResident()
    }, [])
    

  return (
    <article className="resident">
        <header className="resident_header">
            <img className="resident_img" src={resident?.image} alt="imagen-del-residente"/>
            <div className="resident_status">
                <div className={`resident_status_circle ${resident?.status}`}></div>
                <span className="resident_status_value" >{resident?.status}</span>
            </div>
        </header>
        <section className="resident_body">
            <h3 className="resident_name">{resident?.name}</h3>
            <hr className="resident_hr"/>
            <ul className="resident_list">
                <li className="resident_item">
                  <span className="resident_label">Specie</span>
                  <span className="resident_value">{resident?.species}</span></li>
                <li className="resident_item">
                  <span className="resident_label">Origin</span>
                  <span className="resident_value">{resident?.origin.name}</span></li>
                <li className="resident_item">
                  <span className="resident_label">Episodes where apperar</span>
                  <span className="resident_value">{resident?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard