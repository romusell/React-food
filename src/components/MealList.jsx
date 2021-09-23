import {Meal} from './Meal';
function MealList ({meals}){
   
   return <div className="list">
        {meals.map(el=>(
            <Meal key={el.idMeal} {...el} />
        ))}
    </div>
}

export{MealList};