
import { useEffect, useRef, useState } from "react"
import { toyService } from "../services/toy.service.js"
import { utilService } from "../services/util.service.js"


export function ToyFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(toyService.getDefaultFilter())

    onSetFilter = useRef(utilService.debounce(onSetFilter))

    const elInputRef = useRef(null)

    useEffect(() => {
        elInputRef.current.focus()
    }, [])

    useEffect(() => {
        // update father cmp that filters change very type
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        // update father cmp that filters change on submit
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }


    return <section className="toy-filter full">
        
            <input type="text"
                
                name="txt"
                placeholder="Search..."
                className="toy-search-input"
                value={filterByToEdit.txt}
                onChange={handleChange}
                ref={elInputRef}
            />

            <div className="more-options">
                <button>Add Toy</button>

            <form onSubmit={onSubmitFilter} className='filter-form'>
            <input type="range"
                title={"max price: "+filterByToEdit.maxPrice}
                min={0}
                max={500}
                id="maxPrice"
                name="maxPrice"
                placeholder="By max price"
                
                onChange={handleChange}
            />
            
        </form>
            </div>

    </section>
}