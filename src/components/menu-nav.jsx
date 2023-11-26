import Profile from "./Profile";
import user from '../components/user.json'
console.log('users :>> ', user); 

const NavList = () => {
    return (
        <nav className="menu-nav">
            <ul className="menu-nav-list">
                <li className="menu-nav-item">
                    <Profile
                        username={user.username}
                        tag={user.tag}
                        location={user.location}
                        avatar={user.avatar}
                        stats={user.stats}
                    />
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default NavList; 