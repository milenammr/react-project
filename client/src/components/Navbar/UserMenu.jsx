import { Link } from 'react-router-dom';
import Path from '../../paths';
import style from './UserMenu.module.css';

// eslint-disable-next-line react/prop-types
function UserMenu ({name}) {
    return (
        <div className='rounded bg-light'>
            <div className="nav-item dropdown">
                <a className={`${style['dashed-green-border']} p-2 rounded nav-link dropdown-toggle`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hi, {name}
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Favories</a></li>
                    <li><Link className="dropdown-item" to={Path.MyProperties}>My Properties</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to={Path.SignOut}>Sign Out</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default UserMenu;