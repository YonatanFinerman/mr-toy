import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


import { loadToys,removeToy } from "../store/actions/toy.action.js"
import { toyService } from "../services/toy.service.js"

import { ToyList } from "../cmps/toy-list.jsx"
import { ToyFilter } from "../cmps/toy-filter.jsx"


export function ToyIndex() {

    // const dispatch = useDispatch()
     const toys = useSelector((storeState) => storeState.toyModule.toys)

    useEffect(() => {
        onLoadToys()
    }, [])

    function onLoadToys(filterBy) {
        loadToys(filterBy)
            .then(() => {
                // showSuccessMsg('Cars loaded')
                
            })
            .catch(err => {
                // showErrorMsg('Cannot load cars')
            })
    }

    function OnDeleteToy(ev,id){
        ev.stopPropagation()
        removeToy(id)
        .then(() => {
            // showSuccessMsg('Cars loaded')
            
        })
        .catch(err => {
            // showErrorMsg('Cannot load cars')
        })
    }

    function setFilter(filterBy) {
       
        onLoadToys(filterBy)

    }

    

       return <section className=" main-layout full " >
                <div className="filter-cont full">
                    <ToyFilter onSetFilter={setFilter}/>
                </div>
             <ToyList toys={toys} OnDeleteToy={OnDeleteToy}/>
       
    </section>
}