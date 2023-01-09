
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export function AppHeader() {


    // const user = useSelector((storeState => storeState.userModule.user))

    const dispatch = useDispatch()



 

    return (
        <header className="app-header full main-layout">
            <h1>My App</h1>

            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/toy">Toys</NavLink> |
                <NavLink to="/about">About</NavLink> 
                
             
            </nav>


           

        </header>
    )
}

