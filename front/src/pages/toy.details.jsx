import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { MsgsList } from "../cmps/msgs-list"
import { toyService } from "../services/toy.service"

export function ToyDetails() {

    const [currToy, setCurrToy] = useState(null)
    const { toyId } = useParams()

    useEffect(() => {
        loadToy(toyId)
    }, [])

    function loadToy(toyId) {
        toyService.getById(toyId).then(res => {
            setCurrToy(res)
        })

    }
    
    return (currToy) && <section className="toy-details">
        <h2>{currToy.name}</h2>
        <img className="toy-details-img" src={require(`../assets/img/${currToy.toyImgIdx}.jpg`)} />
        <h3>{currToy.price+" $"}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure repellendus labore, sit cum voluptates in quia molestiae omnis animi saepe sint tenetur nobis similique? Dolore ex eaque sint quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, ut libero animi ipsum vero qui, aliquam eos accusamus nostrum soluta iure doloremque nulla aut vel, neque commodi deleniti debitis dolorem?</p>
        <MsgsList msgs={currToy.msgs}/>
    </section>


}