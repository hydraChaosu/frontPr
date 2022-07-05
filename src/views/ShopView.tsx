import React from 'react';
import {Category} from "../components/Category/Category";
import {Search} from "../components/Search/Search";
import {Shop} from "../components/Shop/Shop";

export const ShopView = () => {

    return (
        <>
            <Category/>
            <Search/>
            <Shop/>
        </>
    )
}
