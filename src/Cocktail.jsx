import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useLoaderData, Navigate, useNavigate } from 'react-router-dom';
import Wrapper  from './assets/wrappers/CocktailPage';
const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='; 
export const loader = async (id) => {
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};


 
console.log(loader())
const Cocktail = ()=>{
    

    const navigate = useNavigate()
    const {id,data} = useLoaderData()
    const singleDrink = data.drinks[0]
    const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instructions} = singleDrink

    const validIngredients = Object.keys(singleDrink).filter((key)=>{return key.startsWith("strIngredient")&&singleDrink[key]!==null}).map((key)=>{return singleDrink[key]})
    console.log(validIngredients)
  if(!data){return <Navigate to="/"/>}
  return (<>
    
    <Wrapper>
      <header>
      <button onClick={() => navigate(-1)} className='btn'>
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
          <span  className='drink-data'> Ingredients :  </span>
          {validIngredients.map((ing)=>{ return(<> {ing}, </>) })}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
    </>) 
}
export default Cocktail