
import { ToyPreview } from "./toy-preview"

export function ToyList({toys,OnDeleteToy}){
   
    return <section className="toy-list">
        {toys.map(toy=>{
            return <ToyPreview key={toy._id} toy={toy} OnDeleteToy={OnDeleteToy}/>
        })}
    </section>
}