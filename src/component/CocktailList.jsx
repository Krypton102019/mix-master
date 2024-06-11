import Wrapper from "../assets/wrappers/CocktailList"
import CocktailCard from "../component/CocktailCard"

const CocktailList = ({drinks})=>{
 
    
    const formattedDrinks =   drinks.map((item)=>{
            const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item
            return{id: idDrink, name:strDrink, image:strDrinkThumb, info:strAlcoholic, glass:strGlass}
        })
    
     
    return(<>
        <Wrapper>
            {formattedDrinks.map((item)=>{
                return (<>
                <CocktailCard key={item.id}  cocktail={item}/> </>)
            })}
        </Wrapper>
    </>)
}
export default CocktailList