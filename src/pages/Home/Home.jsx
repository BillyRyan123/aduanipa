import Navbar from '../../components/Navbar/Navbar'
import { useState} from 'react'  
import Button from '../../components/Button/Button'
import heroImage from '../../assets/images/hero-image.png';
import './Home.css'

const Home = () => {
  const [searchRecipe, setRecipeSearch]= useState("")
  return (
    <main className='home'>
        <Navbar/>
       <div className="hero-line-text">
        <hr className="sideline" />
        <p className="hero-paragraph">More than 1000 recipes</p>
       </div>

       <div className='hero-image-wrapper'> 
         <h2 className='hero-text'>Best Recipes for <br />your African Meals</h2>

        <div className='image-group'>
        <div className="hero-shape"></div>
        <img src={heroImage} 
        alt="Ghanaian-dish"
        className='hero-image' 
        />
         </div>

       </div>

       

        <input type="text" 
        className='search-input'
        onChange={(e)=>setRecipeSearch(e.target.value)}
        placeholder='search by dish, ingredient, title'
        value={searchRecipe}
        />
        <Button>Search</Button>
    </main>
  )
}

export default Home