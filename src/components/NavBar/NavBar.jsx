import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="Navbar" >
            <link to='/'>
                <h3>El Nido Virtual</h3>
            </link>
            <div className='Categories'>
                <NavLink to={`/category/Consolas y Juegos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }/>Consolas y Juegos<NavLink/>
                <NavLink to={`/category/Componentes de PC`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }/>Componentes de PC<NavLink/>
                <NavLink to={`/category/Sillas Gamer`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }/>Sillas Gamer<NavLink/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar