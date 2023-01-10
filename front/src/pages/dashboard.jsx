import { useSelector } from "react-redux"
import { DataChart } from "../cmps/data-chart"

export function Dashboard(){
    const toys = useSelector((storeState) => storeState.toyModule.toys)
    return <section>
        dashboard
        <DataChart toys={toys}/>
    </section>
}