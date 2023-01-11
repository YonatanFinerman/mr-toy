
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export function AppHeader() {


    // const user = useSelector((storeState => storeState.userModule.user))

    const dispatch = useDispatch()



    // <img className="toy-preview-img" src={require(`../assets/img/${toy.toyImgIdx}.jpg`)} />

    return (
        <header className="app-header full ">
            <img className="logo" src={require(`../assets/img/logo5.PNG`)} />
            {/* <h1 className='logo'>My App</h1> */}

            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/toy">Toys</NavLink> |
                {/* <NavLink to="/dashboard">Dashboard</NavLink> | */}
                <NavLink to="/about">About</NavLink> 
                
             
            </nav>


           

        </header>
    )
}

