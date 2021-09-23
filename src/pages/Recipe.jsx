import {useParams,useHistory} from 'react-router-dom'; 
import {useEffect,useState} from 'react';
import {getMealById} from '../api';
import {Preloader} from '../components/Preloader';

function Recipe (){
   const [recipe, setRecipe] = useState({}); 
   const {
          idMeal,
          strMealThumb,
          strMeal,
          strCategory,
          strArea,
          strInstructions,
          strYoutube,
          } = recipe;
   const {id} = useParams();
   const {goBack} = useHistory();
   useEffect( () => {
       getMealById(id).then((data) => setRecipe(data.meals[0]));
   },[id]);  
    
    return (
    <>
        {!idMeal ? <Preloader/> : (
            <div className="recipe">
                <img src={strMealThumb} alt={strMeal} />
                <h1>{strMeal}</h1>
                <h6>Category: {strCategory}</h6>
                {strArea ? <h6>Area: {strArea}</h6> : null}
                <p>{strInstructions}</p>
                
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                         Object.keys(recipe).map(key => {
                           if(key.includes('Ingredient') && recipe[key]){
                               return (
                                   <tr key={key}>
                                     <td>{recipe[key]}</td>
                                     <td>{recipe[`strMeasure${key.slice(13)}`]}</td>  
                                   </tr>
                               );
                           } return null;
                         })
                        }
                    </tbody>
                </table>
                
                {strYoutube ? (
                    <div className="row">
                      <h5 style={{margin:'1.5rem 0 1.5rem'}}>Video Recipe</h5>
                      <iframe title={id} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} 
                      allowfullscreen />
                     
                    </div>
                ) : null}   
            </div>
        )}
        <button className='btn' onClick={goBack}>
           Go Back
        </button>
    </>
    );
}

export {Recipe};