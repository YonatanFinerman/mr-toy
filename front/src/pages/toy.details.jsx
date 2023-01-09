import { useParams } from "react-router-dom"

export function ToyDetails(){
    const params = useParams()
    
    return <div>{"this is" + params.toyId}</div>
}