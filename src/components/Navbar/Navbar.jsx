import {Search, Bookmark, User, Menu, X} from 'lucide-react'
import  './Navbar.css'
import { useState } from 'react';
const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <nav className="navbar">
          <div className='nav-left'>
           <h1 className="navbar-logo">Aduanipa</h1>
          </div>

         {/* the menu */}
         <ul className = {`nav-center ${isMenuOpen ? 'active' :''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/category">Category</a></li>
          <li><a href="/blog">Blog</a></li>
         </ul>

        <div className="nav-right">
        <Search className='nav-icon'/>
         <Bookmark className='nav-icon'/>
         <User className='nav-icon'/>


        <button className='menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X/> : <Menu/>}
        </button>
         </div>

       
        </nav>
    );
}
export default Navbar