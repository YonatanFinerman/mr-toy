
import { useNavigate } from "react-router-dom"

export function ToyPreview({ toy,OnDeleteToy }) {
   
    const navigate = useNavigate()

    // function onX(ev,id){
    //     console.log(ev)
    // }
      return  < article className="toy-preview" onClick={()=>navigate(`/toy/${toy._id}`)} >
        <header>
        <h2>{toy.name}</h2>
        <button onClick={(ev)=>OnDeleteToy(ev,toy._id)}>X</button>
        </header>
        {/* <img className="toy-preview-img" src={(toy.toyImg)} alt="" /> */}
        {/* <img className="toy-preview-img" src={`../assets/img/${toy.toyImgIdx}.jpg`} /> */}
        <img className="toy-preview-img" src={require(`../assets/img/${toy.toyImgIdx}.jpg`)} />
        <p>{toy.price + " $"}</p>
        


      </article >
}