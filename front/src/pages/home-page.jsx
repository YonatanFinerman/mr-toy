import { useNavigate } from "react-router-dom"
import { DataChart } from "../cmps/data-chart"
import { useSelector } from "react-redux"
import { toyService } from "../services/toy.service"
import { useEffect, useState } from "react"
export function HomePage(){
const navigate = useNavigate()
const [totalToys,setTotalToys] = useState([])

useEffect(()=>{
    toyService.query()
    .then(res=>{
        setTotalToys(res)
    })

},[])
const toys = useSelector((storeState) => storeState.toyModule.toys)

    return <section className="home-page main-layout full">
        <img className="full homepage-img" src={require(`../assets/img/homepage.png`)} onClick={()=>navigate('/toy')} />
        <h2 className="charts-section-title"> DashBoard</h2>
        <DataChart toys={totalToys}/>
    </section>
}