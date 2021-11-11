import './header.scss';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1><span>Marvel</span> information portal</h1>
            <div className="menu">
                <NavLink exact='true' to='/' activeclassname='active'>Characters</NavLink>
                <span> / </span>
                <NavLink to='comics' activeclassname='active'>Comics</NavLink>
            </div>
        </header>
    )
}

export default Header;