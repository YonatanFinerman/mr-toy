
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function ToyPreview({ toy, OnDeleteToy }) {

  const [isHover, setIsHover] = useState(false)

  const navigate = useNavigate()


  function onEditToy(ev, id) {

    ev.stopPropagation()
    navigate(`/toy/edit/${toy._id}`)

  }

  return < article className="toy-preview" onClick={() => navigate(`/toy/${toy._id}`)} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>

    <img className="toy-preview-img" src={require(`../assets/img/${toy.toyImgIdx}.jpg`)} />

    <header>
      <div className="prev-txt-cont">
        <h2>{toy.name}</h2>

        <p>{toy.price + " $"}</p>
      </div>
      <button onClick={(ev) => onEditToy(ev, toy._id)}>Edit</button>

      {(isHover) && <button className="delete-btn" onClick={(ev) => OnDeleteToy(ev, toy._id)}>X</button>}


    </header>

  </article >
}