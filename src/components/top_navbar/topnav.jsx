import './topnav.css'
import { Link } from 'react-router-dom'
import profilepic from "./profile.jpg"
import title from "./logo2.png"
import Content from "../articles/article"

export default function TopNavBar(){
    return(
        <div className="t_nav">
        <div className="logotitle">  
        <img src={title} alt="Logo2" className='logo2' /> 
        </div>
        <div className="navbar">
        <ul className="navlist">
        <Link className='lists' to= "/">
            HOME
            </Link>
            <Link className="lists" to="/about" >
                ABOUT
            </Link>
            <Link className='lists' to= "/create">
            CREATE
            </Link>
            <li className="lists">CONTACT</li>
            <li className="lists">LOGOUT</li>
        </ul>
        </div>
        <Link className='profile' to= "/settings">
        <div className="profile">
        <img src= {profilepic} alt="Profile" />
        <span>My Profile</span>
        </div>
            </Link>
        </div>
    )
}