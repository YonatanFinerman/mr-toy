import { Select } from "react-select"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { toyService } from "../services/toy.service.js"
import { utilService } from "../services/util.service.js"
import { MultiSelect } from "./multi-select.jsx"

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
        let { value, name: field, type, checked } = target
        value = (type === 'number') ? +value : value
        if (type === 'checkbox') {
            value = checked
        }
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        // update father cmp that filters change on submit
        // ev.preventDefault()
        // onSetFilter(filterByToEdit)
    }


    return <section className="toy-filter full">


        <div className="filter-cont">
            <input type="text"

                name="txt"
                placeholder="Search..."
                className="toy-search-input"
                value={filterByToEdit.txt}
                onChange={handleChange}
                ref={elInputRef}
            />

            <MultiSelect setFilterByToEdit={setFilterByToEdit} />
        </div>

        <div className="more-options">
            <Link to={`/toy/edit/`}><button className="add-Toy-btn">Add Toy</button></Link>

        <select
            name="sortBy"
            onChange={handleChange}
            className="sort-select"
            id="">
            <option value="">Sort Toys</option>
            <option value="time">Latest Release</option>
            <option value="name">Toy Name</option>
            <option value="price">Lowest Price</option>
        </select>




        


            <form onSubmit={onSubmitFilter} className='filter-form'>
                <input type="range"
                    title={"max price: " + filterByToEdit.maxPrice}
                    min={0}
                    max={500}
                    id="maxPrice"
                    name="maxPrice"
                    className="price-filter"
                    value={filterByToEdit.maxPrice}
                    placeholder="By max price"

                    onChange={handleChange}
                />

            </form>
        <input
            type="checkbox"
            name="inStock"
            onChange={handleChange}
        />
        </div>

    </section>
}