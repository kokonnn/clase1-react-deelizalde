import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
     <nav>
        <h1>Azul & Rosado</h1>
        <div className="Botones">
            <button> Menu de la Semana </button>
            <button> Pasteleria </button>
            <button> Freezados </button>
        </div>
        <CartWidget/>
     </nav>   
    )
}

export default NavBar