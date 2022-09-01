import {BasketItem} from "../components/Basket/BasketItem";

export function BasketView() {
    //show basket, can change quantity of element, can delete item in basket
    //buy
    return (
        <div>
            {[{id: 1, name: 'aaaaa', quantity: 3}, {id: 2, name: 'aaaaa', quantity: 1}].map( item => <BasketItem id={item.id} quantity={item.quantity} name={item.name}/>)}
        </div>
    );
}
