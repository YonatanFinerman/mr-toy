import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { toyService } from "../services/toy.service.js"
import { loadToys } from "../store/actions/toy.action.js"


export function ToyIndex() {

     const toys = useSelector((storeState) => storeState.toyModule.toys)

    useEffect(() => {
        onLoadToys()
    }, [])

    function onLoadToys() {
        loadToys()
            .then(() => {
                // showSuccessMsg('Cars loaded')
                console.log(toys,'new toys')
            })
            .catch(err => {
                // showErrorMsg('Cannot load cars')
            })
    }



    // const isLoading = useSelector((storeState) => storeState.carModule.isLoading)
    // const shoppingCart = useSelector((storeState) => storeState.carModule.shoppingCart)
    // // const [cars, setCars] = useState([])
    // // const [cart, setCart] = useState([])

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     onLoadCars()
    // }, [])

    // function onLoadCars(filterBy) {
    //     loadCars(filterBy)
    //         .then(() => {
    //             // showSuccessMsg('Cars loaded')
    //         })
    //         .catch(err => {
    //             showErrorMsg('Cannot load cars')
    //         })
    // }



    return <section>index</section>
}