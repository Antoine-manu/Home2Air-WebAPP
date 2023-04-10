import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

export default function Navbar() {
    
    let activeClassName = "active";

    return(
        <>
            <header>
                <nav className="navbar navbar_dark">
                <img src={process.env.PUBLIC_URL + '/img/logo_blanc_administrateur.png'} />
                    <ul>
                        <li> 
                            <NavLink to="/admin/users">
                                <FontAwesomeIcon icon="fa-solid fa-user" /> Utilisateurs
                            </NavLink>
                        </li>
                    </ul> 
                    <NavLink>
                        Se déconnecter <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
                    </NavLink>
                </nav>
            </header>
        </>
    )   
}