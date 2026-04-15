import Navbar from '../../components/Navbar/Navbar'
import { useState} from 'react'  
import Button from '../../components/Button/Button'
import heroImage from '../../assets/images/hero-image.png';
import './Home.css'

const Home = () => {
  const [searchRecipe, setRecipeSearch]= useState("");

  const handleSearch=(e)=>{
    e.preventDefault();

  if (searchRecipe.trim() === "") {
    alert("Please enter a dish name!");
    return;
  }

  console.log("Fetching recipes for:", searchRecipe);

  }
  return (
    <main className='home'>
       <Navbar/>
        <div className="hero-line">
          <hr />
         <p>More than 1000 recipes</p>
        </div>

        {/* Here is every code about the call to action and input to search */ }
      <div className='hero-container'>
          <div className='hero-content-wrapper'> 
         <h2 className='hero-text'>Best Recipes for <br/>your African Meals</h2>

         <form className="search-wrapper" onSubmit={handleSearch}>
          <label htmlFor="recipe-search" className="search-label">Search recipes</label>
           <div className='input-group'>
             <input type="text" 
            className='search-input'
            onChange={(e)=>setRecipeSearch(e.target.value)}
            placeholder='search by dish, ingredient, title'
            value={searchRecipe}
              />
            <Button className='button-style '>Search</Button>
           </div>
         </form>
        </div>

            {/*this is the hero image  */}
        <div className='image-group'>
           <div className="hero-shape"></div>
            <img src={heroImage} 
             alt="Ghanaian-dish"
             className='hero-image' 
            />
        </div>
      </div>

      
    </main>
  )
}
export default Home