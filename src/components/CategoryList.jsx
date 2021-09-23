
import {CategoryItem} from "./CategoryItam";
function CategoryList ({catalog=[]}){
 return (
    <div className="list">
        {catalog.map(el => (
            <CategoryItem key={el.idCategory} {...el} />
        ))}
    </div>  
    );
}
export {CategoryList};