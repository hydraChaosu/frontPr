import {CategoryItem} from "./CategoryItem";

export function Category() {
    //show category items to filter
    return (
        <div>
            {['all', 'alcohol','apples'].map( item => <CategoryItem name={item}/>)}
        </div>
    );
}
