
import { useNavigate } from "react-router-dom"

export function ToyPreview({ toy,OnDeleteToy }) {
   
    const navigate = useNavigate()

    // function onX(ev,id){
    //     console.log(ev)
    // }
    function onEditToy(ev,id){
        console.log(ev)
        ev.stopPropagation()
        navigate(`/toy/edit/${toy._id}`)
        // navigate(`/toy/edit`)
    }
       {/* <NavLink to={`/car/${car._id}`}>Details</NavLink> |
        <NavLink to={`/car/edit/${car._id}`}>Edit</NavLink> */}
      return  < article className="toy-preview" onClick={()=>navigate(`/toy/${toy._id}`)} >
        <header>
        <h2>{toy.name}</h2>
        <div>
        <button onClick={(ev)=>onEditToy(ev,toy._id)}>Edit</button>
        <button onClick={(ev)=>OnDeleteToy(ev,toy._id)}>X</button>
        </div>
        </header>
    
        <img className="toy-preview-img" src={require(`../assets/img/${toy.toyImgIdx}.jpg`)} />
        <p>{toy.price + " $"}</p>
        
        


      </article >
}