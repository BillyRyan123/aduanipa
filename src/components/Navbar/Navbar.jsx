import {Search, Bookmark, ChevronDown, User} from 'lucide-react'
import  './Navbar.css'

const Navbar = ()=>{
    return(
        <nav className="navbar">
          <div className='nav-left'>
           <h1 className="navbar-logo">Aduanipa</h1>
          </div>

         <ul className="nav-center">
          <li><a href="/">Home</a></li>
          <li><a href="/category">Category</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
         </ul>

        <div className="nav-right">
        <Search className='nav-icon'/>
    
         <Bookmark className='nav-icon'/>

         <User className='nav-icon'/>

         <p className='username'>Sam K.</p>

         <ChevronDown className='nav-icon'/>

         </div>


        </nav>
    );
}
export default Navbar